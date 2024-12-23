import { GetAllCardsUseCase } from '@/domain/use-cases/cards/get-all-cards.usecase';
import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { CardDto } from './dto/card.dto';

@Controller('cards')
export class CardsController {
  constructor(private readonly getAllCardsUseCase: GetAllCardsUseCase) {}

  @Get()
  @ApiOkResponse({ type: Array<CardDto> })
  findAll() {
    return this.getAllCardsUseCase.execute();
  }
}
