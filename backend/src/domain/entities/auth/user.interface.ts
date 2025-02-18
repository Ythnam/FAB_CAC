import { AuthProvider } from '@/domain/enums/auth-provider.enum';

export interface IUser {
  id: string;
  email: string;
  userName: string;
  provider: AuthProvider;
  providerId?: string;
  password?: string;
  createdAt: Date;
  updatedAt: Date;
}
