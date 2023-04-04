import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  @Input() nuevo: Personje = { nombre:'', poder:0 };

  // @Output() onNuevoPersonaje: EventEmitter<Personje> = new EventEmitter();

  constructor( private dbzService: DbzService) {}

  agregar() {
    if ( this.nuevo.nombre.trim().length === 0 ) {
      return;
    }

    // this.onNuevoPersonaje.emit( this.nuevo )
    this.dbzService.agregarpersonaje( this.nuevo );
    this.nuevo = {
      nombre: '',
      poder: 0
    }

  }
}
