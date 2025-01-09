import { Module } from '@nestjs/common';
import { GetAllCardsUseCase } from './cards/get-all-cards.usecase';
import { GetAllCardsFilteredBySetUseCase } from './cards/get-all-cards-filtered-by-set.usecase';
import { GetAllCardsFilteredByNameUseCase } from './cards/get-all-cards-filtered-by-name.usecase';

const useCases = [GetAllCardsUseCase, GetAllCardsFilteredBySetUseCase, GetAllCardsFilteredByNameUseCase];

@Module({
  imports: [],
  providers: [...useCases],
  exports: [...useCases],
})
export class UseCasesModule {}
