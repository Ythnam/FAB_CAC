import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SearchCardsMainComponent } from './search-cards-main/search-cards-main.component';
import { SearchCardsRoutingModule } from './search-cards-routing.module';
import { MaterialModule } from '../../shared/material/material.module';

@NgModule({
  declarations: [SearchCardsMainComponent],
  imports: [CommonModule, RouterModule, SearchCardsRoutingModule, MaterialModule],
  exports: [SearchCardsMainComponent],
})
export class SearchCardsModule {}
