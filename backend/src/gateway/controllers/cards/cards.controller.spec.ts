import { Test, TestingModule } from '@nestjs/testing';
import { CardsController } from './cards.controller';
import { GetAllCardsFilteredBySetUseCase } from '@/domain/use-cases/cards/get-all-cards-filtered-by-set.usecase';
import { CardDto } from './dto/card.dto';
import { GetAllCardsUseCase } from '@/domain/use-cases/cards/get-all-cards.usecase';
import { cardEntityPrism } from '@/test-data/card-entity/card-entity-prism-advent-of-thrones';
import { cardEntityEnigma } from '@/test-data/card-entity/card-entity-enigma';

describe('CardsController', () => {
  let cardsController: CardsController;
  let getAllCardsFilteredBySetUseCase: GetAllCardsFilteredBySetUseCase;

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
      ],
    }).compile();

    cardsController = module.get<CardsController>(CardsController);
    getAllCardsFilteredBySetUseCase = module.get<GetAllCardsFilteredBySetUseCase>(GetAllCardsFilteredBySetUseCase);
  });

  it('should be defined', () => {
    expect(cardsController).toBeDefined();
  });

  describe('findAllCardsFilteredBySet', () => {
    it('Should return an aray of cards', async () => {
      // Arrange
      const cards = [cardEntityEnigma, cardEntityPrism];
      jest.spyOn(getAllCardsFilteredBySetUseCase, 'execute').mockResolvedValue(cards);

      // Act
      const result = await cardsController.findAllCardsFilteredBySet('');

      // Assert
      const expectedResult: CardDto[] = [...cards];
      expect(result).toStrictEqual(expectedResult);
    });
  });
});
