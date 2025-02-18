import { RegisterLocalUserUseCase } from './register-local-user.use-case';
import { AuthTokens } from '@/domain/value-objects/auth-tokens.vo';
import { AuthProvider } from '@/domain/enums/auth-provider.enum';

describe('RegisterLocalUserUseCase', () => {
  let registerLocalUserUseCase: RegisterLocalUserUseCase;
  let userRepositoryMock;
  let passwordServiceMock;
  let tokenServiceMock;

  const mockDate = new Date('2024-02-17T12:00:00Z');

  const mockUserData = {
    email: 'test@example.com',
    password: 'password123',
    userName: 'Test User',
  };

  const mockHashedPassword = 'hashedPassword123';

  const mockUser = {
    id: 'user123',
    email: 'test@example.com',
    password: 'hashedPassword123',
    userName: 'Test User',
    provider: AuthProvider.LOCAL,
    createdAt: mockDate,
    updatedAt: mockDate,
  };

  const mockTokens = {
    accessToken: 'mock-access-token',
    refreshToken: 'mock-refresh-token',
  };

  beforeEach(() => {
    userRepositoryMock = {
      findByEmail: jest.fn(),
      saveUser: jest.fn(),
    };

    passwordServiceMock = {
      hash: jest.fn(),
    };

    tokenServiceMock = {
      generateAccessToken: jest.fn(),
      generateRefreshToken: jest.fn(),
    };

    registerLocalUserUseCase = new RegisterLocalUserUseCase(userRepositoryMock, passwordServiceMock, tokenServiceMock);

    // Mock Date.now() for consistent timestamps
    jest.spyOn(global, 'Date').mockImplementation(() => mockDate);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('execute', () => {
    it('should successfully register a new local user', async () => {
      // Arrange
      userRepositoryMock.findByEmail.mockResolvedValue(null);
      passwordServiceMock.hash.mockResolvedValue(mockHashedPassword);
      userRepositoryMock.saveUser.mockResolvedValue(mockUser);
      tokenServiceMock.generateAccessToken.mockReturnValue(mockTokens.accessToken);
      tokenServiceMock.generateRefreshToken.mockReturnValue(mockTokens.refreshToken);

      // Act
      const result = await registerLocalUserUseCase.execute(mockUserData);

      // Assert
      expect(userRepositoryMock.findByEmail).toHaveBeenCalledWith(mockUserData.email);
      expect(passwordServiceMock.hash).toHaveBeenCalledWith(mockUserData.password);
      expect(userRepositoryMock.saveUser).toHaveBeenCalledWith({
        email: mockUserData.email,
        password: mockHashedPassword,
        userName: mockUserData.userName,
        provider: AuthProvider.LOCAL,
        createdAt: mockDate,
        updatedAt: mockDate,
      });
      expect(result).toBeInstanceOf(AuthTokens);
      expect(result.accessToken).toBe(mockTokens.accessToken);
      expect(result.refreshToken).toBe(mockTokens.refreshToken);
    });

    it('should throw error when user already exists', async () => {
      // Arrange
      userRepositoryMock.findByEmail.mockResolvedValue(mockUser);

      // Act & Assert
      await expect(registerLocalUserUseCase.execute(mockUserData)).rejects.toThrow('User already exists');

      expect(passwordServiceMock.hash).not.toHaveBeenCalled();
      expect(userRepositoryMock.saveUser).not.toHaveBeenCalled();
      expect(tokenServiceMock.generateAccessToken).not.toHaveBeenCalled();
      expect(tokenServiceMock.generateRefreshToken).not.toHaveBeenCalled();
    });

    it('should handle password hashing error', async () => {
      // Arrange
      userRepositoryMock.findByEmail.mockResolvedValue(null);
      passwordServiceMock.hash.mockRejectedValue(new Error('Hashing failed'));

      // Act & Assert
      await expect(registerLocalUserUseCase.execute(mockUserData)).rejects.toThrow('Hashing failed');

      expect(userRepositoryMock.saveUser).not.toHaveBeenCalled();
      expect(tokenServiceMock.generateAccessToken).not.toHaveBeenCalled();
      expect(tokenServiceMock.generateRefreshToken).not.toHaveBeenCalled();
    });

    it('should handle user save error', async () => {
      // Arrange
      userRepositoryMock.findByEmail.mockResolvedValue(null);
      passwordServiceMock.hash.mockResolvedValue(mockHashedPassword);
      userRepositoryMock.saveUser.mockRejectedValue(new Error('Save failed'));

      // Act & Assert
      await expect(registerLocalUserUseCase.execute(mockUserData)).rejects.toThrow('Save failed');

      expect(tokenServiceMock.generateAccessToken).not.toHaveBeenCalled();
      expect(tokenServiceMock.generateRefreshToken).not.toHaveBeenCalled();
    });
  });

  describe('input validation', () => {
    it('should handle missing required fields', async () => {
      // Arrange
      const invalidUserData = {
        email: 'test@example.com',
        password: 'password123',
        // userName is missing
      };

      // Act & Assert
      await expect(registerLocalUserUseCase.execute(invalidUserData as any)).rejects.toThrow();
    });

    it('should handle empty string fields', async () => {
      // Arrange
      const invalidUserData = {
        email: '',
        password: 'password123',
        userName: 'Test User',
      };

      // Act & Assert
      await expect(registerLocalUserUseCase.execute(invalidUserData)).rejects.toThrow();
    });
  });
});
