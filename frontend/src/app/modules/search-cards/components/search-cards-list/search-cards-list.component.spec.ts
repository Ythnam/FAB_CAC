import { SearchCardsListComponent } from './search-cards-list.component';

describe('SearchCardsListComponent', () => {
  let component: SearchCardsListComponent;
  let cardsStoreMock;

  beforeEach(() => {
    cardsStoreMock = {
      cards: [],
    };
    component = new SearchCardsListComponent(cardsStoreMock);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
