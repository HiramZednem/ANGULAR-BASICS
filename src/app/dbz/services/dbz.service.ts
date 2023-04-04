import { Injectable } from '@angular/core';
import { Personje } from '../interfaces/dbz.interface';


/*
La ventaja de utilizar los servicios es que la logica de la aplicacion esta centrada en un solo lugar.
*/
@Injectable()
export class DbzService {

  private _personajes: Personje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegetta',
      poder: 8500
    }
  ];

  get personajes(): Personje[] {
    return [...this._personajes];
  }

  constructor() {
    console.log('servicio inicializado')
  }

  agregarpersonaje( personaje: Personje ) {
    this._personajes.push(personaje);
  }
}
