import { Controller, Get, Query } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';

import { CardDto } from './dto/card.dto';
import { GetAllCardsUseCase } from '@/domain/use-cases/cards/get-all-cards.usecase';
import { GetAllCardsFilteredBySetUseCase } from '@/domain/use-cases/cards/get-all-cards-filtered-by-set.usecase';
import { GetAllCardsFilteredByNameUseCase } from '@/domain/use-cases/cards/get-all-cards-filtered-by-name.usecase';

@Controller('cards')
export class CardsController {
  constructor(
    private readonly getAllCardsUseCase: GetAllCardsUseCase,
    private readonly getAllCardsFilteredBySetUseCase: GetAllCardsFilteredBySetUseCase,
    private readonly getAllCardsFilteredByNameUseCase: GetAllCardsFilteredByNameUseCase,
  ) {}

  @Get()
  @ApiOkResponse({ type: Array<CardDto> })
  findAll() {
    return this.getAllCardsUseCase.execute();
  }

  @Get(':set')
  @ApiOkResponse({ type: Array<CardDto> })
  findAllCardsFilteredBySet(@Query('set') set: string) {
    return this.getAllCardsFilteredBySetUseCase.execute(set);
  }

  @Get(':name')
  @ApiOkResponse({ type: Array<CardDto> })
  findAllCardsFilteredByName(@Query('name') name: string) {
    return this.getAllCardsFilteredByNameUseCase.execute(name);
  }
}
