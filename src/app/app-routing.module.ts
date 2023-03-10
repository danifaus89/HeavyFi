import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'category/:id',
    component: CategoryPageComponent,
    data: { item: 'item' },
  },

  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
