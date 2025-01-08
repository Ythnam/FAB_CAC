import { Injectable } from '@nestjs/common';

import { cards } from '@flesh-and-blood/cards';
import { Card as FABCard, Release } from '@flesh-and-blood/types';
import { first, isNil } from 'lodash';

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

  findAllCardsFilteredBySet(set: string): Promise<Array<ICard>> {
    const releaseSet = set as Release;
    const filteredCards = this.filterCardsDataBySet(releaseSet);
    const cardEntities = this.convertToCardEntity(filteredCards);
    const result = this.convertToPromise<ICard[]>(cardEntities);
    return result;
  }

  private filterCardsDataBySet(set: Release): FABCard[] {
    const filteredCards = this.filterCardsBySet(set);
    const cardsDataFiltered = this.filterCardPrintsBySet(filteredCards, set);
    return cardsDataFiltered;
  }

  private filterCardsBySet(set: Release): FABCard[] {
    return cards.filter((card: FABCard) => card.sets.includes(set));
  }

  private filterCardPrintsBySet(fabCards: FABCard[], set: Release): FABCard[] {
    const mappedFabCards = fabCards.map((fabCard: FABCard) => this.filterCardPrintBySet(fabCard, set));
    return mappedFabCards;
  }

  private filterCardPrintBySet(fabCard: FABCard, set: Release): FABCard {
    fabCard.sets = [set];
    fabCard.printings = fabCard.printings.filter((print) => print.set === set);
    const defaultElement = first(fabCard.printings);
    if (!isNil(defaultElement)) {
      fabCard.defaultImage = defaultElement?.image ?? fabCard.defaultImage;
      fabCard.setIdentifiers = [defaultElement.identifier];
    }
    return fabCard;
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
