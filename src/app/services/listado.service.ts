import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListadoService {
  variable: Array<object> = [
    {
      id: 1,
      nombre: 'sensor 001',
      ubicacion: 'Patio',
      electroValvulaID: 1,
      valveStatus: true
    },
    {
      id: 2,
      nombre: 'sensor 002',
      ubicacion: 'Cocina',
      electroValvulaID: 2,
      valveStatus: true
    },
    {
      id: 3,
      nombre: 'sensor 003',
      ubicacion: 'Jardin Delantero',
      electroValvulaID: 3,
      valveStatus: false
    }
    ];

  constructor() {
  }

  getListadoDispositivo(): any {
    return this.variable;
  }
}
