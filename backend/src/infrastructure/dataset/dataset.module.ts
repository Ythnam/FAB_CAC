import { Module } from '@nestjs/common';
import { CardsRepository } from './repositories/cards.repository';

@Module({
  providers: [CardsRepository],
  exports: [CardsRepository],
})
export class DatasetModule {}
