import { TestBed } from '@angular/core/testing';

import { SearchCardsService } from './search-cards.service';

describe('SearchCardsService', () => {
  let service: SearchCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
