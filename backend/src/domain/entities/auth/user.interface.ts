import { AuthProvider } from '@/domain/enums/auth-provider.enum';

export interface IUser {
  id: string;
  email: string;
  name: string;
  provider: AuthProvider;
  providerId?: string;
  password?: string;
  createdAt: Date;
  updatedAt: Date;
}
