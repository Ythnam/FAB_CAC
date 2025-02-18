import { Inject } from '@nestjs/common';

import { PASSWORDS_SERVICE, TOKENS_SERVICE, USERS_REPOSITORY } from '@/constants';
import { IUsersRepository } from '@/domain/repositories/user.repository.interface';
import { IPasswordService } from '@/domain/services/password.service.interface';
import { AuthTokens } from '@/domain/value-objects/auth-tokens.vo';
import { BaseUseCase } from '../base-use-case.interface';
import { ITokenService } from '@/domain/services/token.service.interface';
import { IUser } from '@/domain/entities/auth/user.interface';

export class LoginLocalUserUseCase implements BaseUseCase {
  constructor(
    @Inject(USERS_REPOSITORY)
    private readonly userRepository: IUsersRepository,
    @Inject(PASSWORDS_SERVICE)
    private readonly passwordService: IPasswordService,
    @Inject(TOKENS_SERVICE)
    private readonly tokenService: ITokenService,
  ) {}

  async execute(credentials: { email: string; password: string }): Promise<AuthTokens> {
    const user = await this.userRepository.findByEmail(credentials.email);
    if (!user || user.provider !== 'local') {
      throw new Error('Invalid credentials');
    }

    const isPasswordValid = await this.passwordService.compare(credentials.password, user.password);

    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }

    return this.generateTokens(user);
  }

  private generateTokens(user: IUser): AuthTokens {
    const accessToken = this.tokenService.generateAccessToken({ sub: user.id, email: user.email });

    const refreshToken = this.tokenService.generateRefreshToken({ sub: user.id });

    return new AuthTokens(accessToken, refreshToken);
  }
}
