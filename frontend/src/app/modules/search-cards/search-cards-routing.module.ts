import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { SearchCardsMainComponent } from './search-cards-main/search-cards-main.component';

const routes: Routes = [
  {
    path: '',
    component: SearchCardsMainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchCardsRoutingModule {}
