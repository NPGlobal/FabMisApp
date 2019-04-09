import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FiltersComponent } from './Components/filters/filters.component';
import { HomeComponent } from './Components/home/home.component';
import { FilterPopupComponent } from './filter-popup/filter-popup.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'filter/:code',
    component: FiltersComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'filter-popup',
    component: FilterPopupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
