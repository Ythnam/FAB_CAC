import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CoreModule } from './core/core.module';
import { HomeModule } from './modules/home/home.module';
import { SearchCardsModule } from './modules/search-cards/search-cards.module';
import { MainHeaderComponent } from './layouts/header/main-header/main-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CoreModule, RouterOutlet, MainHeaderComponent, HomeModule, SearchCardsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'frontend';
}
