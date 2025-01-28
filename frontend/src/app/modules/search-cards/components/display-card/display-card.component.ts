import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrl: './display-card.component.scss',
})
export class DisplayCardComponent {
  @Input() key = '';

  get imageUrl(): string {
    // TODO: evolve to get from current BE
    return `https://prod-content.fabrary.io/cards/${this.key}.webp`;
  }
}
