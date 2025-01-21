import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../../shared/material/material.module';
import { SearchCardsRoutingModule } from './search-cards-routing.module';
import { SearchCardsMainComponent } from './components/search-cards-main/search-cards-main.component';
import { SearchCardsHeaderComponent } from './components/search-cards-header/search-cards-header.component';
import { SearchCardsFormComponent } from './components/search-cards-form/search-cards-form.component';

@NgModule({
  declarations: [SearchCardsMainComponent, SearchCardsHeaderComponent, SearchCardsFormComponent],
  imports: [CommonModule, RouterModule, SearchCardsRoutingModule, MaterialModule],
  exports: [SearchCardsMainComponent],
})
export class SearchCardsModule {}
