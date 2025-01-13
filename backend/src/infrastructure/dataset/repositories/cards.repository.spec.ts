import { cards } from '@flesh-and-blood/cards';
import { Release } from '@flesh-and-blood/types';
import { cloneDeep, isEmpty } from 'lodash';

import { CardsRepository } from './cards.repository';
import { CardEntity } from '../entities/card.entity';
import { fabCardEnigma } from '@/test-data/fab-card/fab-card-enigma';
import { fabCardPrism } from '@/test-data/fab-card/fab-card-prism-advent-of-thrones';
import {
  cardEntityEnigma,
  cardPrintingEntityEnigmaColdFoil,
  cardPrintingEntityEnigmaMarvel,
  cardPrintingEntityEnigmaNoFoil,
} from '@/test-data/card-entity/card-entity-enigma';
import { cardEntityPrism } from '@/test-data/card-entity/card-entity-prism-advent-of-thrones';
import { CardFilters } from '@/domain/use-cases/cards/card-filters';

jest.mock('@flesh-and-blood/cards');

describe('CardsRepository', () => {
  let cardsRepository: CardsRepository;

  beforeAll(() => {
    // override cards list now because variable cannot be assigned at mocking module moment
    cards.push(fabCardEnigma);
    cards.push(fabCardPrism);
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  beforeEach(() => {
    cardsRepository = new CardsRepository();
  });

  it('should be defined', () => {
    expect(cardsRepository).toBeDefined();
  });

  describe('findAll', () => {
    describe('filtered by name', () => {
      it('Should return an empty array if nothing is matching', async () => {
        // Arrange
        const cardFilters: CardFilters = {
          name: 'eazvzevz',
        };

        // Act
        const result = await cardsRepository.findAll(cardFilters);

        // Assert
        expect(isEmpty(result)).toBeTruthy();
      });

      it('Should return the whole array if the parameter * is set', async () => {
        // Arrange
        const cardFilters: CardFilters = {
          name: '*',
        };

        // Act
        const result = await cardsRepository.findAll(cardFilters);

        // Assert
        const expectedResult = [cardEntityEnigma, cardEntityPrism];
        expect(result).toHaveLength(2);
        result.forEach((card, index) => {
          expect(card).toBeInstanceOf(CardEntity);
          expect(card).toMatchObject(expectedResult[index]);
        });
      });

      it('Should return 1 card', async () => {
        // Arrange
        const cardFilters: CardFilters = {
          name: 'Enigma',
        };

        // Act
        const result = await cardsRepository.findAll(cardFilters);

        // Assert
        expect(result).toHaveLength(1);
        result.forEach((card) => {
          expect(card).toBeInstanceOf(CardEntity);
          expect(card).toMatchObject(cardEntityEnigma);
        });
      });
    });
  });

  describe('findAllCardsFileredBySet', () => {
    it('Should return an empty array', async () => {
      // Arrange
      const set = Release.Rosetta.toString();

      // Act
      const result = await cardsRepository.findAllCardsFilteredBySet(set);

      // Assert
      expect(isEmpty(result)).toBeTruthy();
    });

    it('Should return 1 card', async () => {
      // Arrange
      const set = Release.PartTheMistveil.toString();

      // Act
      const result = await cardsRepository.findAllCardsFilteredBySet(set);

      // Assert
      const expectedResult = cloneDeep(cardEntityEnigma);
      /* To match only PartTheMistveil, remove EnigmaBlitzDeckd dependencies */
      expectedResult.printings = [cardPrintingEntityEnigmaNoFoil, cardPrintingEntityEnigmaColdFoil, cardPrintingEntityEnigmaMarvel];
      expectedResult.setIdentifiers = ['MST026'];
      expectedResult.sets = [Release.PartTheMistveil.toString()];
      expect(result).toHaveLength(1);
      result.forEach((card) => {
        expect(card).toBeInstanceOf(CardEntity);
        expect(card).toMatchObject(expectedResult);
      });
    });
  });
});
