import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeMainComponent } from './components/home-main/home-main.component';

const routes: Routes = [
  {
    path: '',
    component: HomeMainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
