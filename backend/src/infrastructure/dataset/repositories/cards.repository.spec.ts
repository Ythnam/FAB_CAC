import { cards } from '@flesh-and-blood/cards';
import { Release } from '@flesh-and-blood/types';
import { isEmpty } from 'lodash';

import { CardsRepository } from './cards.repository';
import { CardEntity } from '../entities/card.entity';
import { fabCardEnigma } from '@/test-data/fab-card/fab-card-enigma';
import { fabCardPrism } from '@/test-data/fab-card/fab-card-prism-advent-of-thrones';
import { entityCardEnigma } from '@/test-data/card-entity/card-entity-enigma';

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

  describe('findAllCardsFileredBySet', () => {
    it('Should return an empty array', async () => {
      // Arrange
      const set = Release.Rosetta.toString();

      // Act
      const result = await cardsRepository.findAllCardsFileredBySet(set);

      // Assert
      expect(isEmpty(result)).toBeTruthy();
    });

    it('Should return card1', async () => {
      // Arrange
      const set = Release.PartTheMistveil.toString();

      // Act
      const result = await cardsRepository.findAllCardsFileredBySet(set);

      // Assert
      expect(result).toHaveLength(1);
      result.forEach((card) => {
        expect(card).toBeInstanceOf(CardEntity);
        expect(card).toMatchObject(entityCardEnigma);
      });
    });
  });
});
