import { of } from 'rxjs';

import { cardDtoEnigma } from '../../../../test-data/cards-dto/card-dto-enigma';
import { CardsStore } from './cards.store';

describe('CardsStore', () => {
  let store: CardsStore;
  let cardsServiceMock;

  beforeEach(() => {
    cardsServiceMock = {
      getAllCardsByName: jest.fn().mockReturnValue({
        subscribe: jest.fn(),
      }),
    };
    store = new CardsStore(cardsServiceMock);
  });

  it('should be created', () => {
    expect(store).toBeTruthy();
  });

  describe('fetchCardsByName', () => {
    it('should call getAllCardsByName with enigma input', () => {
      // Arrange
      const name = 'Enigma';
      jest.spyOn(cardsServiceMock, 'getAllCardsByName');

      // Act
      store.fetchCardsByName(name);

      // Assert
      expect(cardsServiceMock.getAllCardsByName).toHaveBeenCalledTimes(1);
      expect(cardsServiceMock.getAllCardsByName).toHaveBeenCalledWith(name);
    });

    describe('subscription case', () => {
      describe('next', () => {
        it('should set cards', () => {
          // Arrange
          const mockCards = [cardDtoEnigma];
          cardsServiceMock.getAllCardsByName.mockReturnValue(of(mockCards));

          // Act
          store.fetchCardsByName(null);

          // Assert
          expect(store.cards).toMatchObject(mockCards);
        });
      });
    });
  });
});
