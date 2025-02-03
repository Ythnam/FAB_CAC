import { Component, Input } from '@angular/core';
import { CardEntity } from '../../models/entities/card.entity';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrl: './display-card.component.scss',
})
export class DisplayCardComponent {
  @Input() card: CardEntity;
  currentIndex = 0;

  // TODO: evolve to get from current BE
  baseUrl = 'https://prod-content.fabrary.io/cards';

  get hasMultiplePrinting(): boolean {
    return this.card.printings.length > 1;
  }

  get imageUrl(): string {
    if (this.hasMultiplePrinting) {
      return `${this.baseUrl}/${this.card.printings[this.currentIndex].image}.webp`;
    }

    return `${this.baseUrl}/${this.card.defaultImage}.webp`;
  }

  nextImage(): void {
    if (this.hasMultiplePrinting) {
      this.currentIndex = (this.currentIndex + 1) % this.card.printings.length;
    }
  }

  previousImage(): void {
    if (this.hasMultiplePrinting) {
      this.currentIndex = (this.currentIndex - 1 + this.card.printings.length) % this.card.printings.length;
    }
  }
}
