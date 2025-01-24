import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { SearchCardsRoutingModule } from './search-cards-routing.module';
import { SearchCardsMainComponent } from './components/search-cards-main/search-cards-main.component';
import { SearchCardsHeaderComponent } from './components/search-cards-header/search-cards-header.component';
import { SearchCardsFormComponent } from './components/search-cards-form/search-cards-form.component';
import { SearchCardsListComponent } from './components/search-cards-list/search-cards-list.component';

@NgModule({
  declarations: [SearchCardsMainComponent, SearchCardsHeaderComponent, SearchCardsFormComponent, SearchCardsListComponent],
  imports: [CommonModule, RouterModule, SearchCardsRoutingModule, SharedModule],
  exports: [SearchCardsMainComponent],
})
export class SearchCardsModule {}
