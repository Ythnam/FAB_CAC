import { ICardsRepository } from '@/domain/repositories/cards-repository.interface';
import { GetAllCardsFilteredBySetUseCase } from './get-all-cards-filtered-by-set.usecase';
import { ICard } from '@/domain/entities/cards/card.interface';
import { Card } from '@/domain/entities/cards/card';
import { cardEntityEnigma } from '@/test-data/card-entity/card-entity-enigma';

describe('GetAllCardsFilteredBySetUseCase', () => {
  let getAllCardsFilteredBySetUseCase: GetAllCardsFilteredBySetUseCase;
  let cardsRepository: ICardsRepository;

  beforeEach(() => {
    cardsRepository = {
      findAll: jest.fn(),
      findAllCardsFilteredBySet: jest.fn(),
    };

    getAllCardsFilteredBySetUseCase = new GetAllCardsFilteredBySetUseCase(cardsRepository);
  });

  it('should be defined', () => {
    expect(getAllCardsFilteredBySetUseCase).toBeDefined();
  });

  describe('execute', () => {
    it('should return an array of cards instances', async () => {
      // Arrange
      const cardsData: ICard[] = [cardEntityEnigma];
      const setSearch = 'Part the Mistveil';
      jest.spyOn(cardsRepository, 'findAllCardsFilteredBySet').mockResolvedValue(cardsData);

      // Act
      const result = await getAllCardsFilteredBySetUseCase.execute(setSearch);

      // Assert
      expect(result).toHaveLength(cardsData.length);
      result.forEach((card, index) => {
        expect(card).toBeInstanceOf(Card);
        expect(card).toMatchObject(cardsData[index]);
      });
      expect(cardsRepository.findAllCardsFilteredBySet).toHaveBeenCalledTimes(1);
    });

    it('should return an empty array if no cards are found', async () => {
      // Arrange
      jest.spyOn(cardsRepository, 'findAllCardsFilteredBySet').mockResolvedValue([]);
      const set = 'aaefgvzvz';

      // Act
      const result = await getAllCardsFilteredBySetUseCase.execute(set);

      // Assert
      expect(result).toEqual([]);
      expect(cardsRepository.findAllCardsFilteredBySet).toHaveBeenCalledTimes(1);
      expect(cardsRepository.findAllCardsFilteredBySet).toHaveBeenCalledWith(set);
    });
  });
});
