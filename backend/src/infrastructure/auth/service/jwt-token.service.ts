import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { ITokenService } from '@/domain/services/token.service.interface';

@Injectable()
export class JwtTokenService implements ITokenService {
  constructor(private readonly jwtService: JwtService) {}

  generateAccessToken(payload: Record<string, any>): string {
    return this.jwtService.sign(payload, {
      expiresIn: '15m',
    });
  }

  generateRefreshToken(payload: Record<string, any>): string {
    return this.jwtService.sign(payload, {
      expiresIn: '7d',
    });
  }

  verifyToken(token: string): Record<string, any> {
    return this.jwtService.verify(token);
  }
}
