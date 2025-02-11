import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { UserEntity } from '../entities/user.entity';
import { IUsersRepository } from '@/domain/repositories/user.repository.interface';
import { AuthProvider } from '@/domain/enums/auth-provider.enum';
import { IUser } from '@/domain/entities/auth/user.interface';

@Injectable()
export class UsersRepository extends Repository<UserEntity> implements IUsersRepository {
  constructor(dataSource: DataSource) {
    super(UserEntity, dataSource.createEntityManager());
  }

  findById(id: string): Promise<IUser> {
    return this.findOne({ where: { id } });
  }

  findByEmail(email: string): Promise<IUser> {
    return this.findOne({ where: { email } });
  }

  findByProviderId(providerId: string, provider: AuthProvider): Promise<IUser> {
    return this.findOne({ where: { providerId, provider } });
  }

  saveUser(user: Partial<IUser>): Promise<IUser> {
    return this.save(user);
  }

  async updateUser(id: string, user: Partial<IUser>): Promise<IUser> {
    await this.update(id, user);
    return this.findOne({ where: { id } });
  }
}
