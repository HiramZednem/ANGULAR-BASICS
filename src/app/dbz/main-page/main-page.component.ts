import { Component } from '@angular/core';
import { Personje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  personajes: Personje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegetta',
      poder: 8500
    }
  ];

  nuevo: Personje = {
    nombre: 'Mastro Rochi',
    poder: 1000
  }

  agregarNuevoPersonaje( personaje: Personje ) {
    this.personajes.push( personaje );
  }

}
