import { Injectable } from '@nestjs/common';

import { cards } from '@flesh-and-blood/cards';
import { Card as FABCard, Release } from '@flesh-and-blood/types';
import { cloneDeep, first, isNil } from 'lodash';

import { ICard } from '@/domain/entities/cards/card.interface';
import { ICardsRepository } from '@/domain/repositories/cards-repository.interface';
import { CardFilters } from '@/domain/use-cases/cards/card-filters';
import { CardEntityMapper } from '../mapper/card-entity-mapper';

@Injectable()
export class CardsRepository implements ICardsRepository {
  constructor() {}

  findAll(filters: CardFilters): Promise<ICard[]> {
    const filteredCards = this.filterCards(filters);
    const cardEntities = this.convertToCardEntity(filteredCards);
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

  //#region private functions

  //#region findAll

  private filterCards(filters: CardFilters): FABCard[] {
    const searchMatchingNamesCaseInsensitiveRegexp = this.generateRegexp(filters.name);
    const filteredCards = cards.filter((card: FABCard) => this.checkFilter(card.name, searchMatchingNamesCaseInsensitiveRegexp));
    return filteredCards;
  }

  private generateRegexp(name: string): RegExp {
    if (name === '*') {
      return new RegExp('');
    }
    return new RegExp(`${name}`, 'i');
  }

  private checkFilter(input: string, matchingRegExp: RegExp): boolean {
    const check = this.shouldTakeAllElements(input) || matchingRegExp.test(input);
    return check;
  }

  private shouldTakeAllElements(input: string): boolean {
    return input === '*';
  }

  //#endregion

  //#region findAllCardsFilteredBySet

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
    const mappedFabCard = cloneDeep(fabCard);
    mappedFabCard.sets = [set];
    mappedFabCard.printings = fabCard.printings.filter((print) => print.set === set);
    const defaultElement = first(fabCard.printings);
    if (!isNil(defaultElement)) {
      mappedFabCard.defaultImage = defaultElement?.image ?? fabCard.defaultImage;
      mappedFabCard.setIdentifiers = [defaultElement.identifier];
    }
    return mappedFabCard;
  }

  //#endregion

  //#region generic functions

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

  //#endregion

  //#endregion
}
