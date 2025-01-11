import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOkResponse, ApiQuery } from '@nestjs/swagger';

import { CardDto } from './dto/card.dto';
import { GetAllCardsUseCase } from '@/domain/use-cases/cards/get-all-cards.usecase';
import { GetAllCardsFilteredBySetUseCase } from '@/domain/use-cases/cards/get-all-cards-filtered-by-set.usecase';
import { GetAllCardsFilteringParametersQuery } from './query/get-all-cards-filtering-parameters.query';

@Controller('cards')
export class CardsController {
  constructor(
    private readonly getAllCardsUseCase: GetAllCardsUseCase,
    private readonly getAllCardsFilteredBySetUseCase: GetAllCardsFilteredBySetUseCase,
  ) {}

  @Get()
  @ApiQuery({ name: 'name', type: 'string', required: false })
  @ApiOkResponse({ type: Array<CardDto> })
  findAll(@Query() query: GetAllCardsFilteringParametersQuery) {
    return this.getAllCardsUseCase.execute(query.name);
  }

  @Get('/set/:set')
  @ApiOkResponse({ type: Array<CardDto> })
  findAllCardsFilteredBySet(@Param('set') set: string) {
    console.log('set');
    return this.getAllCardsFilteredBySetUseCase.execute(set);
  }
}
