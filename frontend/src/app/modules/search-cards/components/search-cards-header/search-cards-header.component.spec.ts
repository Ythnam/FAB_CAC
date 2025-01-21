import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCardsHeaderComponent } from './search-cards-header.component';

describe('SearchCardsHeaderComponent', () => {
  let component: SearchCardsHeaderComponent;
  let fixture: ComponentFixture<SearchCardsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchCardsHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchCardsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
