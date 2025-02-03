import { Injectable, signal, WritableSignal } from '@angular/core';

import { CardsService } from '../services/cards.service';
import { CardEntity } from '../models/entities/card.entity';

@Injectable({
  providedIn: 'any',
})
export class CardsStore {
  cards: WritableSignal<CardEntity[]> = signal([]);

  constructor(private readonly cardService: CardsService) {}

  fetchCardsByName(name: string): void {
    this.cardService.getAllCardsByName(name).subscribe({
      next: (cards) => {
        this.cards.set(cards);
      },
      error: (err) => {
        console.error('Une erreur est survenue lors de la récupération des cartes:', err);
      },
    });
  }
}
