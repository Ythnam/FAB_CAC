import { Module } from '@nestjs/common';
import { GetAllCardsUseCase } from './cards/get-all-cards.usecase';
import { GetAllCardsFilteredBySetUseCase } from './cards/get-all-cards-filtered-by-set.usecase';
import { GetAllCardsFilteredByArtistUseCase } from './cards/get-all-cards-filtered-by-artist.usecase';
import { AuthenticateUserUseCase } from './auth/authenticate-user.use-case';
import { LoginLocalUserUseCase } from './auth/login-local-user.use-case';
import { RegisterLocalUserUseCase } from './auth/register-local-user.use-case';

const useCases = [
  GetAllCardsUseCase,
  GetAllCardsFilteredBySetUseCase,
  GetAllCardsFilteredByArtistUseCase,
  AuthenticateUserUseCase,
  LoginLocalUserUseCase,
  RegisterLocalUserUseCase,
];

@Module({
  imports: [],
  providers: [...useCases],
  exports: [...useCases],
})
export class UseCasesModule {}
