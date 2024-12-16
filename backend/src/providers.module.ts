import { Global, Module } from '@nestjs/common';
import { CARDS_REPOSITORY } from './constants';
import { CardsRepository } from './infrastructure/dataset/repositories/cards.repository';
import { DatasetModule } from './infrastructure/dataset/dataset.module';

@Global()
@Module({
  imports: [DatasetModule],
  providers: [
    {
      provide: CARDS_REPOSITORY,
      useExisting: CardsRepository,
    },
  ],
  exports: [CARDS_REPOSITORY],
})
export class ProvidersModule {}
