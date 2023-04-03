import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    //Las declaraciones nos dice que cosas contiene este modulo
    HeroeComponent,
    ListadoComponent,
  ],
  exports: [
    ListadoComponent
  ],
  imports: [ // Aqui van los modulos
    CommonModule,
  ]
})
export class HeroesModule {

}
