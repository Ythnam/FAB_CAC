import { Card } from '@/domain/entities/cards/card';
import { ICard } from '@/domain/entities/cards/card.interface';
import { ICardsRepository } from '@/domain/repositories/cards-repository.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CardsRepository implements ICardsRepository {
  constructor() {}

  findAll(): Promise<ICard[]> {
    // TODO: to define
    const a = { id: 12 } as Card;
    const b = { id: 24 } as Card;
    const cards = [a, b];
    return new Promise(() => cards);
  }
}
