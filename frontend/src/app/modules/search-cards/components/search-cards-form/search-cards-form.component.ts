import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { CardsStore } from '../../store/cards.store';

@Component({
  selector: 'app-search-cards-form',
  templateUrl: './search-cards-form.component.html',
  styleUrl: './search-cards-form.component.scss',
})
export class SearchCardsFormComponent {
  searchControl: FormControl = new FormControl('');

  constructor(private readonly cardsStore: CardsStore) {}

  onSearch(): void {
    const searchTerm = this.searchControl.value;
    this.cardsStore.fetchCardsByName(searchTerm);
  }
}
