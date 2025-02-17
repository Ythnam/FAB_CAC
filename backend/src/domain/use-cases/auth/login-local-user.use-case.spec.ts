import { LoginLocalUserUseCase } from './login-local-user.use-case';
import { AuthTokens } from '@/domain/value-objects/auth-tokens.vo';

describe('LoginLocalUserUseCase', () => {
  let loginLocalUserUseCase: LoginLocalUserUseCase;
  let userRepositoryMock;
  let passwordServiceMock;
  let tokenServiceMock;

  const mockCredentials = {
    email: 'test@example.com',
    password: 'password123',
  };

  const mockUser = {
    id: 'user123',
    email: 'test@example.com',
    password: 'hashedPassword',
    provider: 'local',
  };

  const mockTokens = {
    accessToken: 'mock-access-token',
    refreshToken: 'mock-refresh-token',
  };

  beforeEach(() => {
    userRepositoryMock = {
      findByEmail: jest.fn(),
    };

    passwordServiceMock = {
      compare: jest.fn(),
    };

    tokenServiceMock = {
      generateAccessToken: jest.fn(),
      generateRefreshToken: jest.fn(),
    };

    loginLocalUserUseCase = new LoginLocalUserUseCase(userRepositoryMock, passwordServiceMock, tokenServiceMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('execute', () => {
    it('should successfully authenticate local user with valid credentials', async () => {
      // Arrange
      userRepositoryMock.findByEmail.mockResolvedValue(mockUser);
      passwordServiceMock.compare.mockResolvedValue(true);
      tokenServiceMock.generateAccessToken.mockReturnValue(mockTokens.accessToken);
      tokenServiceMock.generateRefreshToken.mockReturnValue(mockTokens.refreshToken);

      // Act
      const result = await loginLocalUserUseCase.execute(mockCredentials);

      // Assert
      expect(userRepositoryMock.findByEmail).toHaveBeenCalledWith(mockCredentials.email);
      expect(passwordServiceMock.compare).toHaveBeenCalledWith(mockCredentials.password, mockUser.password);
      expect(tokenServiceMock.generateAccessToken).toHaveBeenCalledWith({
        sub: mockUser.id,
        email: mockUser.email,
      });
      expect(tokenServiceMock.generateRefreshToken).toHaveBeenCalledWith({
        sub: mockUser.id,
      });
      expect(result).toBeInstanceOf(AuthTokens);
      expect(result.accessToken).toBe(mockTokens.accessToken);
      expect(result.refreshToken).toBe(mockTokens.refreshToken);
    });

    it('should throw error when user is not found', async () => {
      // Arrange
      userRepositoryMock.findByEmail.mockResolvedValue(null);

      // Act & Assert
      await expect(loginLocalUserUseCase.execute(mockCredentials)).rejects.toThrow('Invalid credentials');

      expect(passwordServiceMock.compare).not.toHaveBeenCalled();
      expect(tokenServiceMock.generateAccessToken).not.toHaveBeenCalled();
      expect(tokenServiceMock.generateRefreshToken).not.toHaveBeenCalled();
    });

    it('should throw error when user is not a local provider', async () => {
      // Arrange
      const googleUser = { ...mockUser, provider: 'google' };
      userRepositoryMock.findByEmail.mockResolvedValue(googleUser);

      // Act & Assert
      await expect(loginLocalUserUseCase.execute(mockCredentials)).rejects.toThrow('Invalid credentials');

      expect(passwordServiceMock.compare).not.toHaveBeenCalled();
      expect(tokenServiceMock.generateAccessToken).not.toHaveBeenCalled();
      expect(tokenServiceMock.generateRefreshToken).not.toHaveBeenCalled();
    });

    it('should throw error when password is invalid', async () => {
      // Arrange
      userRepositoryMock.findByEmail.mockResolvedValue(mockUser);
      passwordServiceMock.compare.mockResolvedValue(false);

      // Act & Assert
      await expect(loginLocalUserUseCase.execute(mockCredentials)).rejects.toThrow('Invalid credentials');

      expect(tokenServiceMock.generateAccessToken).not.toHaveBeenCalled();
      expect(tokenServiceMock.generateRefreshToken).not.toHaveBeenCalled();
    });

    it('should handle password service errors', async () => {
      // Arrange
      userRepositoryMock.findByEmail.mockResolvedValue(mockUser);
      passwordServiceMock.compare.mockRejectedValue(new Error('Password service error'));

      // Act & Assert
      await expect(loginLocalUserUseCase.execute(mockCredentials)).rejects.toThrow('Password service error');
    });
  });
});
