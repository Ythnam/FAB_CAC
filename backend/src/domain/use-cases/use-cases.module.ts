import { Module } from '@nestjs/common';
import { GetAllCardsUseCase } from './cards/get-all-cards.usecase';

const useCases = [GetAllCardsUseCase];

@Module({
  imports: [],
  providers: [...useCases],
  exports: [...useCases],
})
export class UseCasesModule {}
