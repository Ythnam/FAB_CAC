import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { CARDS_REPOSITORY, PASSWORDS_SERVICE, TOKENS_SERVICE, USERS_REPOSITORY } from './constants';
import { DatasetModule } from './infrastructure/dataset/dataset.module';
import { AuthInfrastructureModule } from './infrastructure/auth/auth.module';

import { CardsRepository } from './infrastructure/dataset/repositories/cards.repository';
import { UsersRepository } from './infrastructure/auth/repositories/user.repository';
import { JwtTokenService } from './infrastructure/auth/service/jwt-token.service';
import { BcryptPasswordService } from './infrastructure/auth/service/bcrypt-password.service';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthInfrastructureModule,
    DatasetModule,
  ],
  providers: [
    {
      provide: USERS_REPOSITORY,
      useExisting: UsersRepository,
    },
    {
      provide: CARDS_REPOSITORY,
      useExisting: CardsRepository,
    },
    {
      provide: TOKENS_SERVICE,
      useExisting: JwtTokenService,
    },
    {
      provide: PASSWORDS_SERVICE,
      useExisting: BcryptPasswordService,
    },
  ],
  exports: [CARDS_REPOSITORY, USERS_REPOSITORY, TOKENS_SERVICE, PASSWORDS_SERVICE],
})
export class ProvidersModule {}
