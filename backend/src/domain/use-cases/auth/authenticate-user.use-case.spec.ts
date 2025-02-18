import { AuthenticateUserUseCase } from './authenticate-user.use-case';
import { AuthProvider } from '@/domain/enums/auth-provider.enum';
import { AuthTokens } from '@/domain/value-objects/auth-tokens.vo';

describe('AuthenticateUserUseCase', () => {
  let authenticateUserUseCase: AuthenticateUserUseCase;
  let userRepositoryMock;
  let tokenServiceMock;

  const mockDate = new Date('2024-02-17T12:00:00Z');

  const mockProfile = {
    id: 'google123',
    email: 'test@example.com',
    userName: 'Test User',
  };

  const mockUser = {
    id: 'user123',
    email: 'test@example.com',
    userName: 'Test User',
    provider: AuthProvider.GOOGLE,
    providerId: 'google123',
    createdAt: mockDate,
    updatedAt: mockDate,
  };

  const mockTokens = {
    accessToken: 'mock-access-token',
    refreshToken: 'mock-refresh-token',
  };

  beforeEach(() => {
    userRepositoryMock = {
      findById: jest.fn(),
      findByEmail: jest.fn(),
      findByProviderId: jest.fn(),
      saveUser: jest.fn(),
      updateUser: jest.fn(),
    };

    tokenServiceMock = {
      generateAccessToken: jest.fn(),
      generateRefreshToken: jest.fn(),
      verifyToken: jest.fn(),
    };

    authenticateUserUseCase = new AuthenticateUserUseCase(userRepositoryMock, tokenServiceMock);

    jest.spyOn(global, 'Date').mockImplementation(() => mockDate);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('execute', () => {
    it('should return tokens for existing user with matching providerId', async () => {
      // Arrange
      userRepositoryMock.findByProviderId.mockResolvedValue(mockUser);
      tokenServiceMock.generateAccessToken.mockReturnValue(mockTokens.accessToken);
      tokenServiceMock.generateRefreshToken.mockReturnValue(mockTokens.refreshToken);

      // Act
      const result = await authenticateUserUseCase.execute(AuthProvider.GOOGLE, mockProfile);

      // Assert
      expect(userRepositoryMock.findByProviderId).toHaveBeenCalledWith(mockProfile.id, AuthProvider.GOOGLE);
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

    it('should link provider to existing user found by email', async () => {
      // Arrange
      const existingUser = { ...mockUser, provider: null, providerId: null };
      const updatedUser = { ...mockUser };

      userRepositoryMock.findByProviderId.mockResolvedValue(null);
      userRepositoryMock.findByEmail.mockResolvedValue(existingUser);
      userRepositoryMock.updateUser.mockResolvedValue(updatedUser);
      tokenServiceMock.generateAccessToken.mockReturnValue(mockTokens.accessToken);
      tokenServiceMock.generateRefreshToken.mockReturnValue(mockTokens.refreshToken);

      // Act
      const result = await authenticateUserUseCase.execute(AuthProvider.GOOGLE, mockProfile);

      // Assert
      expect(userRepositoryMock.updateUser).toHaveBeenCalledWith(existingUser.id, {
        provider: AuthProvider.GOOGLE,
        providerId: mockProfile.id,
        updatedAt: mockDate,
      });
      expect(result).toBeInstanceOf(AuthTokens);
      expect(result.accessToken).toBe(mockTokens.accessToken);
      expect(result.refreshToken).toBe(mockTokens.refreshToken);
    });

    it('should create new user when no existing user is found', async () => {
      // Arrange
      const newUser = { ...mockUser };

      userRepositoryMock.findByProviderId.mockResolvedValue(null);
      userRepositoryMock.findByEmail.mockResolvedValue(null);
      userRepositoryMock.saveUser.mockResolvedValue(newUser);
      tokenServiceMock.generateAccessToken.mockReturnValue(mockTokens.accessToken);
      tokenServiceMock.generateRefreshToken.mockReturnValue(mockTokens.refreshToken);

      // Act

      const result = await authenticateUserUseCase.execute(AuthProvider.GOOGLE, mockProfile);

      // Assert
      expect(userRepositoryMock.saveUser).toHaveBeenCalledWith({
        email: mockProfile.email,
        userName: mockProfile.userName,
        provider: AuthProvider.GOOGLE,
        providerId: mockProfile.id,
        createdAt: mockDate,
        updatedAt: mockDate,
      });
      expect(result).toBeInstanceOf(AuthTokens);
      expect(result.accessToken).toBe(mockTokens.accessToken);
      expect(result.refreshToken).toBe(mockTokens.refreshToken);
    });

    it('should handle errors during user creation', async () => {
      // Arrange
      userRepositoryMock.findByProviderId.mockResolvedValue(null);
      userRepositoryMock.findByEmail.mockResolvedValue(null);
      userRepositoryMock.saveUser.mockRejectedValue(new Error('Database error'));

      // Act & Assert
      await expect(authenticateUserUseCase.execute(AuthProvider.GOOGLE, mockProfile)).rejects.toThrow('Database error');
    });
  });
});
