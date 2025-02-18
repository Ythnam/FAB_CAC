import * as bcrypt from 'bcrypt';
import { BcryptPasswordService } from './bcrypt-password.service';

jest.mock('bcrypt'); // Mock de bcrypt pour éviter de vrais calculs de hash

describe('BcryptPasswordService', () => {
  let service;

  beforeEach(() => {
    service = new BcryptPasswordService();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('hash', () => {
    it('should hash the password', async () => {
      // Arrange
      const password = 'password123';
      const hashedPassword = 'hashedPassword123';

      (bcrypt.hash as jest.Mock).mockResolvedValue(hashedPassword);

      // Act
      const result = await service.hash(password);

      // Assert
      expect(bcrypt.hash).toHaveBeenCalledWith(password, 12);
      expect(result).toBe(hashedPassword);
    });
  });

  describe('compare', () => {
    it('should return true if passwords are matching', async () => {
      // Arrange
      const password = 'password123';
      const hashedPassword = 'hashedPassword123';

      (bcrypt.compare as jest.Mock).mockResolvedValue(true);

      // Act
      const result = await service.compare(password, hashedPassword);

      // Assert
      expect(bcrypt.compare).toHaveBeenCalledWith(password, hashedPassword);
      expect(result).toBe(true);
    });

    it('should return false if passwords are not matching', async () => {
      // Arrange
      const password = 'password123';
      const hashedPassword = 'hashedPassword123';

      (bcrypt.compare as jest.Mock).mockResolvedValue(false);

      // Act
      const result = await service.compare(password, hashedPassword);

      // Assert
      expect(bcrypt.compare).toHaveBeenCalledWith(password, hashedPassword);
      expect(result).toBe(false);
    });
  });
});
