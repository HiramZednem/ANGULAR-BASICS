import { Component, Input } from '@angular/core';
import { Personje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
  //Con esta notacion le estoy dicendo a angular 'oye papi, esta informacion va a venir del componente padre'
  // puedo ponerle un nobre por defecto para que sea visto desde el componente padre de esta manera
  // @Input(data), pero usarlo en esta caso seria redundante
  // @Input() personajes: Personje[] = [];

  get personajes(): Personje[] {
    return this.dbzService.personajes;
  }
  constructor(private dbzService: DbzService) {
  }
}
