import { ICardsRepository } from '@/domain/repositories/cards-repository.interface';
import { ICard } from '@/domain/entities/cards/card.interface';
import { Card } from '@/domain/entities/cards/card';
import { cardEntityEnigma } from '@/test-data/card-entity/card-entity-enigma';
import { GetAllCardsFilteredByNameUseCase } from './get-all-cards-filtered-by-name.usecase';

describe('GetAllCardsFilteredByNameUseCase', () => {
  let getAllCardsFilteredByNameUseCase: GetAllCardsFilteredByNameUseCase;
  let cardsRepository: ICardsRepository;

  beforeEach(() => {
    cardsRepository = {
      findAll: jest.fn(),
      findAllCardsFilteredBySet: jest.fn(),
      findAllCardsFilteredByName: jest.fn(),
    };

    getAllCardsFilteredByNameUseCase = new GetAllCardsFilteredByNameUseCase(cardsRepository);
  });

  it('should be defined', () => {
    expect(getAllCardsFilteredByNameUseCase).toBeDefined();
  });

  describe('execute', () => {
    it('should return an array of cards instances', async () => {
      // Arrange
      const cardsData: ICard[] = [cardEntityEnigma];
      const name = 'Enigma';
      jest.spyOn(cardsRepository, 'findAllCardsFilteredByName').mockResolvedValue(cardsData);

      // Act
      const result = await getAllCardsFilteredByNameUseCase.execute(name);

      // Assert
      expect(result).toHaveLength(cardsData.length);
      result.forEach((card, index) => {
        expect(card).toBeInstanceOf(Card);
        expect(card).toMatchObject(cardsData[index]);
      });
      expect(cardsRepository.findAllCardsFilteredByName).toHaveBeenCalledTimes(1);
    });

    it('should return an empty array if no cards are found', async () => {
      // Arrange
      jest.spyOn(cardsRepository, 'findAllCardsFilteredByName').mockResolvedValue([]);
      const name = 'aaefgvzvz';

      // Act
      const result = await getAllCardsFilteredByNameUseCase.execute(name);

      // Assert
      expect(result).toEqual([]);
      expect(cardsRepository.findAllCardsFilteredByName).toHaveBeenCalledTimes(1);
      expect(cardsRepository.findAllCardsFilteredByName).toHaveBeenCalledWith(name);
    });
  });
});
