import { Component } from '@angular/core';
import { Personje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  nuevo: Personje = {
    nombre: 'Mastro Rochi',
    poder: 1000
  }

  constructor(  ) {

  }

}
