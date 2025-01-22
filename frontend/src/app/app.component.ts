import { APP_INITIALIZER, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CoreModule } from './core/core.module';
import { ConfigService } from './core/services/config.service';
import { HomeModule } from './modules/home/home.module';
import { SearchCardsModule } from './modules/search-cards/search-cards.module';
import { MainHeaderComponent } from './layouts/header/main-header/main-header.component';

export function initializeApp(configService: ConfigService): () => Promise<void> {
  const env = (window as any)['__env'] || 'dev'; // Extrait l'environnement dynamiquement ou utilise "dev" par défaut
  return () => configService.loadConfig(env);
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CoreModule, RouterOutlet, MainHeaderComponent, HomeModule, SearchCardsModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [ConfigService],
      multi: true,
    },
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'frontend';
}
