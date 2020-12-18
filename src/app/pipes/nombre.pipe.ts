import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizarCadena'
})
export class NombrePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (!value) { return value; }
    return value[0].toUpperCase() + value.substr(1).toLowerCase();
  }
}
