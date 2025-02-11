import { Inject } from '@nestjs/common';

import { IUsersRepository } from '@/domain/repositories/user.repository.interface';
import { AuthTokens } from '@/domain/value-objects/auth-tokens.vo';
import { AuthProvider } from '@/domain/enums/auth-provider.enum';
import { IUser } from '@/domain/entities/auth/user.interface';
import { TOKENS_SERVICE, USERS_REPOSITORY } from '@/constants';
import { BaseUseCase } from '../base-use-case.interface';
import { ITokenService } from '@/domain/services/token.service.interface';

export class AuthenticateUserUseCase implements BaseUseCase {
  constructor(
    @Inject(USERS_REPOSITORY)
    private readonly userRepository: IUsersRepository,
    @Inject(TOKENS_SERVICE)
    private readonly tokenService: ITokenService,
  ) {}

  async execute(provider: AuthProvider, profile: any): Promise<AuthTokens> {
    let user = await this.userRepository.findByProviderId(profile.id, provider);

    if (!user) {
      user = await this.userRepository.findByEmail(profile.email);

      if (!user) {
        user = await this.userRepository.saveUser({
          email: profile.email,
          name: profile.name,
          provider,
          providerId: profile.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      } else {
        // Link social account to existing user
        user = await this.userRepository.updateUser(user.id, {
          provider,
          providerId: profile.id,
          updatedAt: new Date(),
        });
      }
    }

    return this.generateTokens(user);
  }

  private generateTokens(user: IUser): AuthTokens {
    const accessToken = this.tokenService.generateAccessToken({ sub: user.id, email: user.email });

    const refreshToken = this.tokenService.generateRefreshToken({ sub: user.id });

    return new AuthTokens(accessToken, refreshToken);
  }
}
