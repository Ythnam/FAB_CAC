import { Injectable } from '@nestjs/common';
import { cards } from '@flesh-and-blood/cards';
import { Card as FABCard } from '@flesh-and-blood/types';
import { ICard } from '@/domain/entities/cards/card.interface';
import { ICardsRepository } from '@/domain/repositories/cards-repository.interface';
import { CardEntityMapper } from '../mapper/card-entity-mapper';

@Injectable()
export class CardsRepository implements ICardsRepository {
  constructor() {}

  findAll(): Promise<ICard[]> {
    // TODO: Remove the slice and optimise the call
    const test = cards.slice(0, 100);
    const cardsMapped = test.flatMap((card: FABCard) => {
      return CardEntityMapper.toCardEntity(card);
    });
    const result = new Promise<ICard[]>((resolve) => {
      resolve(cardsMapped);
    });
    return result;
  }
}
