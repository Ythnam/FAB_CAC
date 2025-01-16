import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SearchCardsMainComponent } from './search-cards-main/search-cards-main.component';
import { SearchCardsRoutingModule } from './search-cards-routing.module';

@NgModule({
  declarations: [SearchCardsMainComponent],
  imports: [CommonModule, RouterModule, SearchCardsRoutingModule],
  exports: [SearchCardsMainComponent],
})
export class SearchCardsModule {}
