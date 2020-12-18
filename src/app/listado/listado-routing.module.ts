import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
// import {DetalleComponent} from './detalle/detalle.component';
import {ListadoComponent} from './listado.component';

const routes: Routes = [
  {
    path: 'home',
    component: ListadoComponent
  },
  {
    path: '',
    component: ListadoComponent,
    children: [
      {
        path: 'detalle',
        loadChildren: () => import('./detalle/detalle.module').then(m => m.DetalleModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListadoRoutingModule {
}
