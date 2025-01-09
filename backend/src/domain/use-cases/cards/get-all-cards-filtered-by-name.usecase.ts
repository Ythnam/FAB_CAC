import { Inject, Injectable } from '@nestjs/common';

import { CARDS_REPOSITORY } from '@/constants';
import { BaseUseCase } from '../base-use-case.interface';
import { ICardsRepository } from '@/domain/repositories/cards-repository.interface';
import { ICard } from '@/domain/entities/cards/card.interface';
import { Card } from '@/domain/entities/cards/card';

@Injectable()
export class GetAllCardsFilteredByNameUseCase implements BaseUseCase {
  constructor(
    @Inject(CARDS_REPOSITORY)
    private readonly cardsRepository: ICardsRepository,
  ) {}

  async execute(name: string): Promise<ICard[]> {
    console.log('GetAllCardsFilteredByNameUseCase');
    const cardsData = await this.cardsRepository.findAllCardsFilteredByName(name);
    return cardsData.map((card) => new Card().fromDao(card));
  }
}
