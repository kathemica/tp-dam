import { Component, OnInit } from '@angular/core';
import {ListadoService} from '../services/listado.service';
import {Dispositivo} from '../model/Dispositivo';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  dispositivos = new Array<Dispositivo>();

  constructor(public listadoServ: ListadoService) {
    this.dispositivos = listadoServ.getListadoDispositivo();
    console.log(this.dispositivos[0]);
  }

  ngOnInit(): void {
  }
}
