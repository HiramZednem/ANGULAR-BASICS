import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  @Input() nuevo: Personje = { nombre:'', poder:0 };

  @Output() onNuevoPersonaje: EventEmitter<Personje> = new EventEmitter();

  agregar() {
    if ( this.nuevo.nombre.trim().length === 0 ) {
      return;
    }

    this.onNuevoPersonaje.emit( this.nuevo )

    this.nuevo = {
      nombre: '',
      poder: 0
    }

  }
}
