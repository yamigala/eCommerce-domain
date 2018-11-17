import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//applied routing 
const routes: Routes = [
  {
    path:'order',
    loadChildren:"app/order/order.module#OrderModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
