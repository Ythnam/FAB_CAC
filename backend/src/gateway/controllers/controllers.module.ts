import { Module } from '@nestjs/common';
import { CardsController } from './cards/cards.controller';
import { UseCasesModule } from '@/domain/use-cases/use-cases.module';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [UseCasesModule],
  controllers: [CardsController, AuthController],
})
export class ControllersModule {}
