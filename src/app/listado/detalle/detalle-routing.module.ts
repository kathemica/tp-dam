import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DetalleModule} from './detalle.module';

const routes: Routes = [{
  path: '',
  component: DetalleModule
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalleRoutingModule {
}
