import { ICardsRepository } from '@/domain/repositories/cards-repository.interface';
import { ICard } from '@/domain/entities/cards/card.interface';
import { Card } from '@/domain/entities/cards/card';
import { GetAllCardsFilteredByArtistUseCase } from './get-all-cards-filtered-by-artist.usecase';
import { cardEntityEnigma } from '@/test-data/card-entity/card-entity-enigma';

describe('GetAllCardsFilteredByArtistUseCase', () => {
  let getAllCardsFilteredByArtistUseCase: GetAllCardsFilteredByArtistUseCase;
  let cardsRepository: ICardsRepository;

  beforeEach(() => {
    cardsRepository = {
      findAll: jest.fn(),
      findAllCardsFilteredBySet: jest.fn(),
      findAllCardsFilteredByArtist: jest.fn(),
    };

    getAllCardsFilteredByArtistUseCase = new GetAllCardsFilteredByArtistUseCase(cardsRepository);
  });

  it('should be defined', () => {
    expect(getAllCardsFilteredByArtistUseCase).toBeDefined();
  });

  describe('execute', () => {
    it('should return an array of cards instances', async () => {
      // Arrange
      const cardsData: ICard[] = [cardEntityEnigma];
      const artist = 'asur';
      jest.spyOn(cardsRepository, 'findAllCardsFilteredByArtist').mockResolvedValue(cardsData);

      // Act
      const result = await getAllCardsFilteredByArtistUseCase.execute(artist);

      // Assert
      expect(result).toHaveLength(cardsData.length);
      result.forEach((card, index) => {
        expect(card).toBeInstanceOf(Card);
        expect(card).toMatchObject(cardsData[index]);
      });
      expect(cardsRepository.findAllCardsFilteredByArtist).toHaveBeenCalledTimes(1);
    });

    it('should return an empty array if no cards are found', async () => {
      // Arrange
      jest.spyOn(cardsRepository, 'findAllCardsFilteredByArtist').mockResolvedValue([]);
      const artist = 'eaeagzgzg';
      // Act
      const result = await getAllCardsFilteredByArtistUseCase.execute(artist);

      // Assert
      expect(result).toEqual([]);
      expect(cardsRepository.findAllCardsFilteredByArtist).toHaveBeenCalledTimes(1);
      expect(cardsRepository.findAllCardsFilteredByArtist).toHaveBeenCalledWith(artist);
    });
  });
});
