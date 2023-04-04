import { Injectable } from '@angular/core';
import { Personje } from '../interfaces/dbz.interface';

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
}
