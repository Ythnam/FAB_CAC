import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { IPasswordService } from '@/domain/services/password.service.interface';

@Injectable()
export class BcryptPasswordService implements IPasswordService {
  async hash(password: string): Promise<string> {
    return bcrypt.hash(password, 12);
  }

  async compare(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }
}
