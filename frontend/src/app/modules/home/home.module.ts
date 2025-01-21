import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeMainComponent } from './components/home-main/home-main.component';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from '../../shared/material/material.module';

@NgModule({
  declarations: [HomeMainComponent],
  imports: [CommonModule, RouterModule, HomeRoutingModule, MaterialModule],
  exports: [HomeMainComponent],
})
export class HomeModule {}
