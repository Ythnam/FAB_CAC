import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthConfig {
  constructor(private configService: ConfigService) {}

  get jwtSecret(): string {
    return this.configService.get<string>('JWT_SECRET');
  }

  get googleConfig() {
    return {
      clientID: this.configService.get<string>('GOOGLE_CLIENT_ID'),
      clientSecret: this.configService.get<string>('GOOGLE_CLIENT_SECRET'),
      callbackURL: this.configService.get<string>('GOOGLE_CALLBACK_URL'),
    };
  }

  get facebookConfig() {
    return {
      clientID: this.configService.get<string>('FACEBOOK_CLIENT_ID'),
      clientSecret: this.configService.get<string>('FACEBOOK_CLIENT_SECRET'),
      callbackURL: this.configService.get<string>('FACEBOOK_CALLBACK_URL'),
    };
  }
}
