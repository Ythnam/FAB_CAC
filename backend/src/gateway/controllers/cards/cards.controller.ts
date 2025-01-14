import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOkResponse, ApiQuery } from '@nestjs/swagger';

import { CardDto } from './dto/card.dto';
import { GetAllCardsUseCase } from '@/domain/use-cases/cards/get-all-cards.usecase';
import { GetAllCardsFilteredBySetUseCase } from '@/domain/use-cases/cards/get-all-cards-filtered-by-set.usecase';
import { GetAllCardsFilteringParametersQuery } from './query/get-all-cards-filtering-parameters.query';
import { CardFilters } from '@/domain/use-cases/cards/card-filters';
import { GetAllCardsFilteredByArtistUseCase } from '@/domain/use-cases/cards/get-all-cards-filtered-by-artist.usecase';

@Controller('cards')
export class CardsController {
  constructor(
    private readonly getAllCardsUseCase: GetAllCardsUseCase,
    private readonly getAllCardsFilteredBySetUseCase: GetAllCardsFilteredBySetUseCase,
    private readonly getAllCardsFilteredByArtistUseCase: GetAllCardsFilteredByArtistUseCase,
  ) {}

  @Get()
  @ApiQuery({ name: 'name', type: 'string', required: false })
  @ApiOkResponse({ type: Array<CardDto> })
  findAll(@Query() query: GetAllCardsFilteringParametersQuery) {
    const cardFilters = new CardFilters(query.name);
    return this.getAllCardsUseCase.execute(cardFilters);
  }

  @Get('/set/:set')
  @ApiOkResponse({ type: Array<CardDto> })
  findAllCardsFilteredBySet(@Param('set') set: string) {
    return this.getAllCardsFilteredBySetUseCase.execute(set);
  }

  @Get('/artist/:artist')
  @ApiOkResponse({ type: Array<CardDto> })
  findAllCardsFilteredByArtist(@Param('artist') artist: string) {
    return this.getAllCardsFilteredByArtistUseCase.execute(artist);
  }
}
