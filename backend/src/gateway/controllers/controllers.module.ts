import { Module } from '@nestjs/common';
import { CardsController } from './cards/cards.controller';
import { UseCasesModule } from '@/domain/use-cases/use-cases.module';

@Module({
  imports: [UseCasesModule],
  controllers: [CardsController],
})
export class ControllersModule {}
