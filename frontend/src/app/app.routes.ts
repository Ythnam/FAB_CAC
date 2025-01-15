import { Routes } from '@angular/router';

import { HomeMainComponent } from './modules/home/components/home-main/home-main.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeMainComponent,
        children: [
            {
                path: 'home',
                loadChildren: () => import('../app/modules/home/home.module').then((m) => m.HomeModule),
            },
            {
                path: 'search',
                loadChildren: () => import('../app/modules/search-cards/search-cards.module').then((m) => m.SearchCardsModule),
            },
        ]
    }
];
