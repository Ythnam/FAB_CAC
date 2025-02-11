import { BaseEntity } from '../base.entity';
import { AuthProvider } from '../../enums/auth-provider.enum';
import { IUser } from './user.interface';

export class User extends BaseEntity implements IUser {
  id: string;
  email: string;
  name: string;
  provider: AuthProvider;
  providerId?: string;
  password?: string;
  createdAt: Date;
  updatedAt: Date;
}
