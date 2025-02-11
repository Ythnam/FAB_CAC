import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { JwtStrategy } from './strategies/jwt.strategy';
import { GoogleStrategy } from './strategies/google.strategy';
import { FacebookStrategy } from './strategies/facebook.strategy';
import { AuthConfig } from './service/auth-config.service';
import { UsersRepository } from './repositories/user.repository';
import { JwtTokenService } from './service/jwt-token.service';
import { BcryptPasswordService } from './service/bcrypt-password.service';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: { expiresIn: '15m' },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [AuthConfig, JwtStrategy, GoogleStrategy, FacebookStrategy, UsersRepository, JwtTokenService, BcryptPasswordService],
  exports: [JwtTokenService, BcryptPasswordService, UsersRepository],
})
export class AuthInfrastructureModule {}
