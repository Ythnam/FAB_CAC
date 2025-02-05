import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { CARDS_REPOSITORY } from './constants';
import { CardsRepository } from './infrastructure/dataset/repositories/cards.repository';
import { DatasetModule } from './infrastructure/dataset/dataset.module';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatasetModule,
  ],
  providers: [
    {
      provide: CARDS_REPOSITORY,
      useExisting: CardsRepository,
    },
  ],
  exports: [CARDS_REPOSITORY],
})
export class ProvidersModule {}
