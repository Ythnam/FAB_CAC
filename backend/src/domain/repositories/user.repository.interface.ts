import { IUser } from '../entities/auth/user.interface';
import { AuthProvider } from '../enums/auth-provider.enum';

export interface IUsersRepository {
  findById(id: string): Promise<IUser>;
  findByEmail(email: string): Promise<IUser>;
  findByProviderId(providerId: string, provider: AuthProvider): Promise<IUser>;
  saveUser(user: Partial<IUser>): Promise<IUser>;
  updateUser(id: string, user: Partial<IUser>): Promise<IUser>;
}
