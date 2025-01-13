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
    const cardEntities = this.mapToCardEntities(filteredCards);
    return cardEntities;
  }

  findAllCardsFilteredBySet(set: string): Promise<Array<ICard>> {
    const releaseSet = set as Release;
    const filteredCards = this.filterCardsDataBySet(releaseSet);
    const cardEntities = this.mapToCardEntities(filteredCards);
    return cardEntities;
  }

  private filterCards(filters: CardFilters): FABCard[] {
    const matchingRegExp = this.createRegExp(filters.name);
    const filteredCards = cards.filter((card: FABCard) => this.isMatchingFilter(card.name, matchingRegExp));
    return filteredCards;
  }

  /**
   * Create a case insensitive regular expression
   * @param input the input parameter
   * @returns the regular expression
   */
  private createRegExp(input: string): RegExp {
    return input === '*' ? /.*/ : new RegExp(input, 'i');
  }

  private isMatchingFilter(input: string, regExp: RegExp): boolean {
    const check = input === '*' || regExp.test(input);
    return check;
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
    const clonedCard = cloneDeep(fabCard);
    clonedCard.sets = [set];
    clonedCard.printings = fabCard.printings.filter((print) => print.set === set);

    const defaultElement = first(fabCard.printings);
    if (!isNil(defaultElement)) {
      clonedCard.defaultImage = defaultElement?.image ?? fabCard.defaultImage;
      clonedCard.setIdentifiers = [defaultElement.identifier];
    }

    return clonedCard;
  }

  private mapToCardEntities(fabCard: FABCard[]): Promise<ICard[]> {
    return Promise.resolve(fabCard.map(CardEntityMapper.toCardEntity));
  }
}
