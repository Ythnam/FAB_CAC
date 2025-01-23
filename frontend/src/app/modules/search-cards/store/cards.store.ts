import { Injectable } from '@angular/core';

import { CardsService } from '../services/cards.service';

@Injectable({
  providedIn: 'any',
})
export class CardsStore {
  cards: any[] = [];

  constructor(private readonly cardService: CardsService) {}

  fetchCardsByName(name: string): void {
    this.cardService.getAllCardsByName(name).subscribe({
      next: (cards) => {
        this.cards = cards;
      },
      error: (err) => {
        console.error('Une erreur est survenue lors de la récupération des cartes:', err);
      },
    });
  }
}
