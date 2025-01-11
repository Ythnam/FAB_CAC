import { Inject, Injectable } from '@nestjs/common';
import { BaseUseCase } from '../base-use-case.interface';
import { CARDS_REPOSITORY } from '@/constants';
import { ICardsRepository } from '@/domain/repositories/cards-repository.interface';
import { ICard } from '@/domain/entities/cards/card.interface';
import { Card } from '@/domain/entities/cards/card';

@Injectable()
export class GetAllCardsUseCase implements BaseUseCase {
  constructor(
    @Inject(CARDS_REPOSITORY)
    private readonly cardsRepository: ICardsRepository,
  ) {}

  async execute(name?: string): Promise<ICard[]> {
    const cardsData = await this.cardsRepository.findAll(name);
    return cardsData.map((card) => new Card().fromDao(card));
  }
}
