import { Test, TestingModule } from '@nestjs/testing';

import { CardsController } from './cards.controller';
import { GetAllCardsUseCase } from '@/domain/use-cases/cards/get-all-cards.usecase';
import { GetAllCardsFilteredBySetUseCase } from '@/domain/use-cases/cards/get-all-cards-filtered-by-set.usecase';

import { cardEntityPrism } from '@/test-data/card-entity/card-entity-prism-advent-of-thrones';
import { cardEntityEnigma } from '@/test-data/card-entity/card-entity-enigma';
import { cardDtoEnigma } from '@/test-data/card-dto/card-dto-enigma';
import { cardDtoPrism } from '@/test-data/card-dto/card-dto-prism-advent-of-thrones';
import { GetAllCardsFilteringParametersQuery } from './query/get-all-cards-filtering-parameters.query';
import { GetAllCardsFilteredByArtistUseCase } from '@/domain/use-cases/cards/get-all-cards-filtered-by-artist.usecase';

describe('CardsController', () => {
  let cardsController: CardsController;
  let getAllCardsUseCase: GetAllCardsUseCase;
  let getAllCardsFilteredBySetUseCase: GetAllCardsFilteredBySetUseCase;
  let getAllCardsFilteredByArtistUseCase: GetAllCardsFilteredByArtistUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CardsController],
      providers: [
        {
          provide: GetAllCardsUseCase,
          useValue: {
            execute: jest.fn(),
          },
        },
        {
          provide: GetAllCardsFilteredBySetUseCase,
          useValue: {
            execute: jest.fn(),
          },
        },
        {
          provide: GetAllCardsFilteredByArtistUseCase,
          useValue: {
            execute: jest.fn(),
          },
        },
      ],
    }).compile();

    cardsController = module.get<CardsController>(CardsController);
    getAllCardsUseCase = module.get<GetAllCardsUseCase>(GetAllCardsUseCase);
    getAllCardsFilteredBySetUseCase = module.get<GetAllCardsFilteredBySetUseCase>(GetAllCardsFilteredBySetUseCase);
    getAllCardsFilteredByArtistUseCase = module.get<GetAllCardsFilteredByArtistUseCase>(GetAllCardsFilteredByArtistUseCase);
  });

  it('should be defined', () => {
    expect(cardsController).toBeDefined();
  });

  describe('findAll', () => {
    describe('filtered by query', () => {
      it('Should return an array of cards', async () => {
        // Arrange
        const query: GetAllCardsFilteringParametersQuery = { name: 'Enigma' };
        const cards = [cardEntityEnigma];
        jest.spyOn(getAllCardsUseCase, 'execute').mockResolvedValue(cards);

        // Act
        const result = await cardsController.findAll(query);

        // Assert
        const expectedResult = [cardDtoEnigma];
        expect(result).toStrictEqual(expectedResult);
      });
    });
  });

  describe('findAllCardsFilteredBySet', () => {
    it('Should return an aray of cards', async () => {
      // Arrange
      const cards = [cardEntityEnigma, cardEntityPrism];
      jest.spyOn(getAllCardsFilteredBySetUseCase, 'execute').mockResolvedValue(cards);

      // Act
      const result = await cardsController.findAllCardsFilteredBySet('');

      // Assert
      const expectedResult = [cardDtoEnigma, cardDtoPrism];
      expect(result).toStrictEqual(expectedResult);
    });
  });

  describe('findAllCardsFilteredByArtist', () => {
    it('Should return an aray of cards', async () => {
      // Arrange
      const cards = [cardEntityEnigma];
      const artist = 'asur';
      jest.spyOn(getAllCardsFilteredByArtistUseCase, 'execute').mockResolvedValue(cards);

      // Act
      const result = await cardsController.findAllCardsFilteredByArtist(artist);

      // Assert
      const expectedResult = [cardDtoEnigma];
      expect(result).toStrictEqual(expectedResult);
    });
  });
});
