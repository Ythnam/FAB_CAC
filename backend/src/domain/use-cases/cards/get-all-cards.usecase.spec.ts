import { GetAllCardsUseCase } from './get-all-cards.usecase';
import { ICard } from '@/domain/entities/cards/card.interface';
import { ICardsRepository } from '@/domain/repositories/cards-repository.interface';
import { Card } from '@/domain/entities/cards/card';
import { CardFilters } from './card-filters';
import { InvalidQueryParameterError } from '@/domain/exceptions/invalid-query-parameter-error';
import { ErrorMessages } from '@/domain/exceptions/error-messages';
import { cardEntityEnigma } from '@/test-data/card-entity/card-entity-enigma';
import { cardEntityPrism } from '@/test-data/card-entity/card-entity-prism-advent-of-thrones';

describe('getAllCardsUseCase', () => {
  let getAllCardsUseCase: GetAllCardsUseCase;
  let cardsRepository: ICardsRepository;

  beforeEach(() => {
    cardsRepository = {
      findAll: jest.fn(),
      findAllCardsFilteredBySet: jest.fn(),
      findAllCardsFilteredByArtist: jest.fn(),
    };

    getAllCardsUseCase = new GetAllCardsUseCase(cardsRepository);
  });

  it('should be defined', () => {
    expect(getAllCardsUseCase).toBeDefined();
  });

  describe('execute', () => {
    describe('filter on name', () => {
      it('should throw an InvalidQueryParameterError if there is not at least 2 characters', async () => {
        // Arrange
        const cardFilters: CardFilters = {
          name: 'En',
        };
        jest.spyOn(cardsRepository, 'findAll').mockResolvedValue([]);

        // Act
        let result;
        try {
          await getAllCardsUseCase.execute(cardFilters);
        } catch (e) {
          result = e;
        }

        // Assert
        expect(result).toBeInstanceOf(InvalidQueryParameterError);
        expect(result.message).toBe(ErrorMessages.INVALID_LENGTH_PARAMETER);
      });

      it('should return all cards if the query parameter is *', async () => {
        // Arrange
        const cardsData: ICard[] = [cardEntityEnigma, cardEntityPrism];
        const cardFilters: CardFilters = {
          name: '*',
        };
        jest.spyOn(cardsRepository, 'findAll').mockResolvedValue(cardsData);

        // Act
        const result = await getAllCardsUseCase.execute(cardFilters);

        // Assert
        expect(result).toHaveLength(cardsData.length);
        result.forEach((card, index) => {
          expect(card).toBeInstanceOf(Card);
          expect(card).toMatchObject(cardsData[index]);
        });
        expect(cardsRepository.findAll).toHaveBeenCalledTimes(1);
        expect(cardsRepository.findAll).toHaveBeenCalledWith(cardFilters);
      });

      it('should return an array of cards instances', async () => {
        // Arrange
        const cardsData: ICard[] = [cardEntityEnigma];
        const cardFilters: CardFilters = {
          name: 'Enigma',
        };
        jest.spyOn(cardsRepository, 'findAll').mockResolvedValue(cardsData);

        // Act
        const result = await getAllCardsUseCase.execute(cardFilters);

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
        const result = await getAllCardsUseCase.execute(cardFilters);

        // Assert
        expect(result).toEqual([]);
        expect(cardsRepository.findAll).toHaveBeenCalledTimes(1);
        expect(cardsRepository.findAll).toHaveBeenCalledWith(cardFilters);
      });
    });
  });
});
