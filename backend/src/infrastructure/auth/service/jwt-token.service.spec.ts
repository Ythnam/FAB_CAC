import { JwtTokenService } from './jwt-token.service';

jest.mock('@nestjs/jwt');

describe('JwtTokenService', () => {
  let service;
  let jwtServiceMock;

  beforeEach(() => {
    jwtServiceMock = {
      sign: jest.fn(),
      verify: jest.fn(),
    };
    service = new JwtTokenService(jwtServiceMock);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('generateAccessToken', () => {
    it('should generate an access token with 15m expiration', () => {
      // Arrange
      const payload = { userId: '123' };
      const token = 'access_token';

      (jwtServiceMock.sign as jest.Mock).mockReturnValue(token);

      // Act
      const result = service.generateAccessToken(payload);

      // Assert
      expect(jwtServiceMock.sign).toHaveBeenCalledWith(payload, { expiresIn: '15m' });
      expect(result).toBe(token);
    });
  });

  describe('generateRefreshToken', () => {
    it('should generate an refresh token with 7d expiration', () => {
      // Arrange
      const payload = { userId: '123' };
      const token = 'refresh_token';

      (jwtServiceMock.sign as jest.Mock).mockReturnValue(token);

      // Act
      const result = service.generateRefreshToken(payload);

      // Assert
      expect(jwtServiceMock.sign).toHaveBeenCalledWith(payload, { expiresIn: '7d' });
      expect(result).toBe(token);
    });
  });

  describe('verifyToken', () => {
    it('should verify and return token payload', () => {
      // Arrange
      const token = 'valid_token';
      const payload = { userId: '123' };

      (jwtServiceMock.verify as jest.Mock).mockReturnValue(payload);

      // Act
      const result = service.verifyToken(token);

      // Assert
      expect(jwtServiceMock.verify).toHaveBeenCalledWith(token);
      expect(result).toBe(payload);
    });
  });
});
