import { SearchCardsFormComponent } from './search-cards-form.component';

describe('SearchCardsFormComponent', () => {
  let component: SearchCardsFormComponent;
  let cardsStore;

  beforeEach(() => {
    cardsStore = {
      fetchCardsByName: jest.fn(),
    };
    component = new SearchCardsFormComponent(cardsStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
