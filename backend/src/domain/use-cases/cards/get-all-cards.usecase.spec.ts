import { GetAllCardsUseCase } from './get-all-cards.usecase';
import { cardEntityEnigma } from '@/test-data/card-entity/card-entity-enigma';
import { ICard } from '@/domain/entities/cards/card.interface';
import { ICardsRepository } from '@/domain/repositories/cards-repository.interface';
import { Card } from '@/domain/entities/cards/card';
import { CardFilters } from './card-filters';

describe('getAllCards', () => {
  let getAllCards: GetAllCardsUseCase;
  let cardsRepository: ICardsRepository;

  beforeEach(() => {
    cardsRepository = {
      findAll: jest.fn(),
      findAllCardsFilteredBySet: jest.fn(),
    };

    getAllCards = new GetAllCardsUseCase(cardsRepository);
  });

  it('should be defined', () => {
    expect(getAllCards).toBeDefined();
  });

  describe('execute', () => {
    it('should return an array of cards instances', async () => {
      // Arrange
      const cardsData: ICard[] = [cardEntityEnigma];
      const cardFilters: CardFilters = {
        name: 'Enigma',
      };
      jest.spyOn(cardsRepository, 'findAll').mockResolvedValue(cardsData);

      // Act
      const result = await getAllCards.execute(cardFilters);

      // Assert
      expect(result).toHaveLength(cardsData.length);
      result.forEach((card, index) => {
        expect(card).toBeInstanceOf(Card);
        expect(card).toMatchObject(cardsData[index]);
      });
      expect(cardsRepository.findAll).toHaveBeenCalledTimes(1);
      expect(cardsRepository.findAll).toHaveBeenCalledWith(cardFilters);
    });

    it('should return an empty array if no cards are found', async () => {
      // Arrange
      jest.spyOn(cardsRepository, 'findAll').mockResolvedValue([]);
      const cardFilters: CardFilters = {
        name: 'aaefgvzvz',
      };

      // Act
      const result = await getAllCards.execute(cardFilters);

      // Assert
      expect(result).toEqual([]);
      expect(cardsRepository.findAll).toHaveBeenCalledTimes(1);
      expect(cardsRepository.findAll).toHaveBeenCalledWith(cardFilters);
    });
  });
});
