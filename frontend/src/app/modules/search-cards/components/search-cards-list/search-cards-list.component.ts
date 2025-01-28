import { Component } from '@angular/core';
import { CardsStore } from '../../store/cards.store';

@Component({
  selector: 'app-search-cards-list',
  templateUrl: './search-cards-list.component.html',
  styleUrl: './search-cards-list.component.scss',
})
export class SearchCardsListComponent {
  constructor(readonly cardsStore: CardsStore) {}
}
