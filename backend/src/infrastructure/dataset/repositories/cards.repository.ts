import { Card } from '@/domain/entities/cards/card';
import { ICard } from '@/domain/entities/cards/card.interface';
import { ICardsRepository } from '@/domain/repositories/cards-repository.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CardsRepository implements ICardsRepository {
  constructor() {}

  findAll(): Promise<ICard[]> {
    // TODO: to define
    const a = new Card();
    a.id = 12;
    const b = new Card();
    b.id = 24;
    const cards = [a, b];
    const result = new Promise<ICard[]>((resolve) => {
      resolve(cards);
    });
    return result;
  }
}
