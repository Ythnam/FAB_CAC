import { Module } from '@nestjs/common';
import { GetAllCardsUseCase } from './cards/get-all-cards.usecase';
import { GetAllCardsFilteredBySetUseCase } from './cards/get-all-cards-filtered-by-set.usecase';
import { GetAllCardsFilteredByArtistUseCase } from './cards/get-all-cards-filtered-by-artist.usecase';

const useCases = [GetAllCardsUseCase, GetAllCardsFilteredBySetUseCase, GetAllCardsFilteredByArtistUseCase];

@Module({
  imports: [],
  providers: [...useCases],
  exports: [...useCases],
})
export class UseCasesModule {}
