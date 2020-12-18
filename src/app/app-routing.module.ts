import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListadoComponent} from './listado/listado.component';
import {AppModule} from './app.module';

const routes: Routes = [
  // {
  //   path: 'home',
  //   component: ListadoComponent
  // },
  // // {
  // //   path: 'listado',
  // //   component: ListadoComponent
  // // },
  // {
  //   path: '**',
  //   redirectTo: 'home'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
