import { Inject, Injectable } from '@nestjs/common';

import { CARDS_REPOSITORY } from '@/constants';
import { BaseUseCase } from '../base-use-case.interface';
import { ICardsRepository } from '@/domain/repositories/cards-repository.interface';
import { ICard } from '@/domain/entities/cards/card.interface';
import { Card } from '@/domain/entities/cards/card';

@Injectable()
export class GetAllCardsFilteredByArtistUseCase implements BaseUseCase {
  constructor(
    @Inject(CARDS_REPOSITORY)
    private readonly cardsRepository: ICardsRepository,
  ) {}

  async execute(artist: string): Promise<ICard[]> {
    const cardsData = await this.cardsRepository.findAllCardsFilteredByArtist(artist);
    return cardsData.map((card) => new Card().fromDao(card));
  }
}
