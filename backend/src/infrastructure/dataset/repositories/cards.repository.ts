import { Injectable } from '@nestjs/common';

import { cards } from '@flesh-and-blood/cards';
import { Card as FABCard, Release } from '@flesh-and-blood/types';

import { ICard } from '@/domain/entities/cards/card.interface';
import { ICardsRepository } from '@/domain/repositories/cards-repository.interface';
import { CardEntityMapper } from '../mapper/card-entity-mapper';

@Injectable()
export class CardsRepository implements ICardsRepository {
  constructor() {}

  findAll(): Promise<ICard[]> {
    // TODO: Remove the slice and optimise the call
    const test = cards.slice(0, 100);
    const cardEntities = this.convertToCardEntity(test);
    const result = this.convertToPromise<ICard[]>(cardEntities);
    return result;
  }

  findAllCardsFileredBySet(set: string): Promise<Array<ICard>> {
    const filteredCards = this.filterCardsBySet(set);
    const cardEntities = this.convertToCardEntity(filteredCards);
    const result = this.convertToPromise<ICard[]>(cardEntities);
    return result;
  }

  private filterCardsBySet(set: string): FABCard[] {
    return cards.filter((card: FABCard) => card.sets.includes(set as Release));
  }

  private convertToCardEntity(card: FABCard[]): Array<ICard> {
    const cardsMapped = card.map((card: FABCard) => {
      return CardEntityMapper.toCardEntity(card);
    });
    return cardsMapped;
  }

  private convertToPromise<T>(element: T): Promise<T> {
    const result = new Promise<T>((resolve) => {
      resolve(element);
    });
    return result;
  }
}
