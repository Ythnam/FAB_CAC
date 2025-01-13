import { Inject, Injectable } from '@nestjs/common';

import { BaseUseCase } from '../base-use-case.interface';
import { CARDS_REPOSITORY } from '@/constants';
import { ICardsRepository } from '@/domain/repositories/cards-repository.interface';
import { ICard } from '@/domain/entities/cards/card.interface';
import { Card } from '@/domain/entities/cards/card';
import { CardFilters } from './card-filters';
import { InvalidQueryParameterError } from '@/domain/exceptions/invalid-query-parameter-error';
import { ErrorMessages } from '@/domain/exceptions/error-messages';

@Injectable()
export class GetAllCardsUseCase implements BaseUseCase {
  constructor(
    @Inject(CARDS_REPOSITORY)
    private readonly cardsRepository: ICardsRepository,
  ) {}

  async execute(filters: CardFilters): Promise<ICard[]> {
    this.validateFilters(filters);
    const cardsData = await this.cardsRepository.findAll(filters);
    return cardsData.map((card) => new Card().fromDao(card));
  }

  private validateFilters(filters: CardFilters): void {
    if (this.isInvalid(filters.name)) {
      throw new InvalidQueryParameterError(ErrorMessages.INVALID_LENGTH_PARAMETER);
    }
  }

  private isInvalid(input: string): boolean {
    return input !== '*' && input.length <= 2;
  }
}
