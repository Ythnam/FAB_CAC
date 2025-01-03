import { ICardsRepository } from '@/domain/repositories/cards-repository.interface';
import { GetAllCardsFilteredBySetUseCase } from './get-all-cards-filtered-by-set.usecase';
import { ICard } from '@/domain/entities/cards/card.interface';
import { Card } from '@/domain/entities/cards/card';
import { ICardPrinting } from '@/domain/entities/card-printings/card-printing.interface';

const cardPrinting1: ICardPrinting = {
  artists: ['Asur Misoa'],
  identifier: 'MST130',
  image: 'MST130',
  print: 'MST130',
  set: 'Part the Mistveil',
};
const cardPrinting2: ICardPrinting = {
  artists: ['Asur Misoa'],
  identifier: 'ENG002',
  image: 'ENG002',
  print: 'ENG002',
  set: 'Enigma Blitz Deck',
};
const cardPrinting3: ICardPrinting = {
  artists: ['Asur Misoa'],
  foiling: 'Rainbow',
  identifier: 'LGS291',
  image: 'LGS291',
  print: 'LGS291-Rainbow',
  set: 'Promos',
};
const cardPrinting4: ICardPrinting = {
  artists: ['Asur Misoa'],
  foiling: 'Cold',
  identifier: 'LGS298',
  image: 'LGS298',
  print: 'LGS298-Cold',
  set: 'Promos',
};

const card1: ICard = {
  artists: ['Asur Misoa'],
  classes: ['Illusionist'],
  printings: [cardPrinting1, cardPrinting2, cardPrinting3, cardPrinting4],
  setIdentifiers: ['ENG002', 'LGS291', 'LGS298', 'MST130'],
  sets: ['Enigma Blitz Deck', 'Part the Mistveil', 'Promos'],
  cardIdentifier: 'cosmo-scroll-of-ancestral-tapestry',
  defaultImage: 'MST130',
  name: 'Cosmo, Scroll of Ancestral Tapestry',
  rarity: 'Token',
  typeText: 'Illusionist Weapon - Scroll (2H)',
};

const cardPrinting5: ICardPrinting = {
  artists: ['Mariusz Gandzel'],
  identifier: 'MST227',
  image: 'MST227',
  print: 'MST227',
  set: 'Part the Mistveil',
};
const cardPrinting6: ICardPrinting = {
  artists: ['Mariusz Gandzel'],
  foiling: 'Rainbow',
  identifier: 'MST227',
  image: 'MST227',
  print: 'MST227-Rainbow',
  set: 'Part the Mistveil',
};

const card2 = {
  artists: ['Mariusz Gandzel'],
  classes: ['Mechanologist'],
  printings: [cardPrinting5, cardPrinting6],
  setIdentifiers: ['MST227'],
  sets: ['Part the Mistveil'],
  cardIdentifier: 'supercell-blue',
  defaultImage: 'MST227',
  name: 'Supercell',
  rarity: 'Majestic',
  typeText: 'Mechanologist Action',
};

describe('GetAllCardsFilteredBySetUseCase', () => {
  let getAllCardsFilteredBySetUseCase: GetAllCardsFilteredBySetUseCase;
  let cardsRepository: ICardsRepository;

  beforeEach(() => {
    cardsRepository = {
      findAll: jest.fn(),
      findAllCardsFileredBySet: jest.fn(),
    };

    getAllCardsFilteredBySetUseCase = new GetAllCardsFilteredBySetUseCase(cardsRepository);
  });

  it('should be defined', () => {
    expect(getAllCardsFilteredBySetUseCase).toBeDefined();
  });

  describe('execute', () => {
    it('should return an array of cards instances', async () => {
      // Arrange
      const cardsData: ICard[] = [card1, card2];
      const setSearch = 'Part the Mistveil';
      jest.spyOn(cardsRepository, 'findAllCardsFileredBySet').mockResolvedValue(cardsData);

      // Act
      const result = await getAllCardsFilteredBySetUseCase.execute(setSearch);

      // Assert
      expect(result).toHaveLength(cardsData.length);
      result.forEach((card, index) => {
        expect(card).toBeInstanceOf(Card);
        expect(card).toMatchObject(cardsData[index]);
      });
      expect(cardsRepository.findAllCardsFileredBySet).toHaveBeenCalledTimes(1);
    });

    it('should return an empty array if no cards are found', async () => {
      // Arrange
      jest.spyOn(cardsRepository, 'findAllCardsFileredBySet').mockResolvedValue([]);
      const set = 'aaefgvzvz';

      // Act
      const result = await getAllCardsFilteredBySetUseCase.execute(set);

      // Assert
      expect(result).toEqual([]);
      expect(cardsRepository.findAllCardsFileredBySet).toHaveBeenCalledTimes(1);
      expect(cardsRepository.findAllCardsFileredBySet).toHaveBeenCalledWith(set);
    });
  });
});
