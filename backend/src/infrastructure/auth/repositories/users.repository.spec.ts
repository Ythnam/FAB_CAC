import { Test } from '@nestjs/testing';
import { DataSource } from 'typeorm';

import { UserEntity } from '../entities/user.entity';
import { AuthProvider } from '@/domain/enums/auth-provider.enum';
import { UsersRepository } from './user.repository';

describe('UsersRepository', () => {
  let usersRepository: UsersRepository;

  const mockUser = {
    id: '123',
    email: 'test@example.com',
    providerId: 'google123',
    provider: AuthProvider.GOOGLE,
  };

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        UsersRepository,
        {
          provide: DataSource,
          useValue: {
            createEntityManager: jest.fn(),
          },
        },
      ],
    }).compile();

    usersRepository = module.get<UsersRepository>(UsersRepository);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('findById', () => {
    it('should find a user by id', async () => {
      // Arrange
      const findOneSpy = jest.spyOn(usersRepository, 'findOne').mockResolvedValue(mockUser as UserEntity);

      // Act
      const result = await usersRepository.findById('123');

      // Assert
      expect(findOneSpy).toHaveBeenCalledWith({ where: { id: '123' } });
      expect(result).toEqual(mockUser);
    });

    it('should return null when user is not found', async () => {
      // Arrange
      jest.spyOn(usersRepository, 'findOne').mockResolvedValue(null);

      // Act
      const result = await usersRepository.findById('nonexistent');

      // Assert
      expect(result).toBeNull();
    });
  });

  describe('findByEmail', () => {
    it('should find a user by email', async () => {
      // Arrange
      const findOneSpy = jest.spyOn(usersRepository, 'findOne').mockResolvedValue(mockUser as UserEntity);

      // Act
      const result = await usersRepository.findByEmail('test@example.com');

      // Assert
      expect(findOneSpy).toHaveBeenCalledWith({ where: { email: 'test@example.com' } });
      expect(result).toEqual(mockUser);
    });

    it('should return null when email is not found', async () => {
      // Arrange
      jest.spyOn(usersRepository, 'findOne').mockResolvedValue(null);

      // Act
      const result = await usersRepository.findByEmail('nonexistent@example.com');

      // Assert
      expect(result).toBeNull();
    });
  });

  describe('findByProviderId', () => {
    it('should find a user by providerId and provider', async () => {
      // Arrage
      const findOneSpy = jest.spyOn(usersRepository, 'findOne').mockResolvedValue(mockUser as UserEntity);

      // Act
      const result = await usersRepository.findByProviderId('google123', AuthProvider.GOOGLE);

      // Assert
      expect(findOneSpy).toHaveBeenCalledWith({
        where: { providerId: 'google123', provider: AuthProvider.GOOGLE },
      });
      expect(result).toEqual(mockUser);
    });
  });

  describe('saveUser', () => {
    it('should save a new user', async () => {
      // Arrage
      const newUser = {
        email: 'new@example.com',
        providerId: 'google456',
        provider: AuthProvider.GOOGLE,
      };

      const saveSpy = jest.spyOn(usersRepository, 'save').mockResolvedValue({ id: '456', ...newUser } as UserEntity);

      // Act
      const result = await usersRepository.saveUser(newUser);

      // Assert
      expect(saveSpy).toHaveBeenCalledWith(newUser);
      expect(result).toHaveProperty('id', '456');
      expect(result).toMatchObject(newUser);
    });
  });

  describe('updateUser', () => {
    it('should update an existing user', async () => {
      // Arrange
      const updateData = {
        email: 'updated@example.com',
      };

      const updateSpy = jest.spyOn(usersRepository, 'update').mockResolvedValue(undefined);
      const findOneSpy = jest.spyOn(usersRepository, 'findOne').mockResolvedValue({
        ...mockUser,
        ...updateData,
      } as UserEntity);

      // Act
      const result = await usersRepository.updateUser('123', updateData);

      // Assert
      expect(updateSpy).toHaveBeenCalledWith('123', updateData);
      expect(findOneSpy).toHaveBeenCalledWith({ where: { id: '123' } });
      expect(result).toMatchObject({
        ...mockUser,
        ...updateData,
      });
    });

    it('should throw error when user does not exist', async () => {
      // Arrange
      jest.spyOn(usersRepository, 'update').mockResolvedValue(undefined);
      jest.spyOn(usersRepository, 'findOne').mockResolvedValue(null);

      const updateData = { email: 'updated@example.com' };

      // Act
      const result = await usersRepository.updateUser('nonexistent', updateData);

      // Assert
      expect(result).toBeNull();
    });
  });
});
