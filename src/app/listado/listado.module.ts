import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListadoComponent} from './listado.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../material.module';
import {NombrePipe} from '../pipes/nombre.pipe';
import {ElementoComponent} from './elemento/elemento.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ListadoRoutingModule} from './listado-routing.module';
// import {DetalleComponent} from './detalle/detalle.component';

@NgModule({
  declarations: [
    ListadoComponent,
    NombrePipe,
    ElementoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    ListadoRoutingModule
  ],
  exports: [ListadoComponent]
})
export class ListadoModule {
}
