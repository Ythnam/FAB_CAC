import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCardsFormComponent } from './search-cards-form.component';

describe('SearchCardsFormComponent', () => {
  let component: SearchCardsFormComponent;
  let fixture: ComponentFixture<SearchCardsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchCardsFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchCardsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
