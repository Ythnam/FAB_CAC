import { Inject } from '@nestjs/common';

import { IUsersRepository } from '@/domain/repositories/user.repository.interface';
import { IPasswordService } from '@/domain/services/password.service.interface';
import { AuthTokens } from '@/domain/value-objects/auth-tokens.vo';
import { AuthProvider } from '@/domain/enums/auth-provider.enum';
import { PASSWORDS_SERVICE, TOKENS_SERVICE, USERS_REPOSITORY } from '@/constants';
import { BaseUseCase } from '../base-use-case.interface';
import { ITokenService } from '@/domain/services/token.service.interface';
import { IUser } from '@/domain/entities/auth/user.interface';

type RegisterLocalUserUseCasePayload = {
  email: string;
  password: string;
  userName: string;
};

export class RegisterLocalUserUseCase implements BaseUseCase {
  constructor(
    @Inject(USERS_REPOSITORY)
    private readonly userRepository: IUsersRepository,
    @Inject(PASSWORDS_SERVICE)
    private readonly passwordService: IPasswordService,
    @Inject(TOKENS_SERVICE)
    private readonly tokenService: ITokenService,
  ) {}

  async execute(userData: RegisterLocalUserUseCasePayload): Promise<AuthTokens> {
    const existingUser = await this.userRepository.findByEmail(userData.email);
    if (existingUser) {
      throw new Error('User already exists');
    }

    const hashedPassword = await this.passwordService.hash(userData.password);

    const user = await this.userRepository.saveUser({
      email: userData.email,
      password: hashedPassword,
      userName: userData.userName,
      provider: AuthProvider.LOCAL,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return this.generateTokens(user);
  }

  private generateTokens(user: IUser): AuthTokens {
    const accessToken = this.tokenService.generateAccessToken({ sub: user.id, email: user.email });

    const refreshToken = this.tokenService.generateRefreshToken({ sub: user.id });

    return new AuthTokens(accessToken, refreshToken);
  }
}
