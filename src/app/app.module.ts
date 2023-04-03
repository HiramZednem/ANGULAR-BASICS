import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  // App.modules sirve para hacer que la propiedad 'selector' de los componentes sea declarada y asi el sistema
  // reconozca que estos existen.
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    DbzModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
* Los modulos aparte de servirnos para que el sistema reconozca que nuestros componentes existen, sirven para diversificar
* mi aplicacion, con esto me refiero a que hasta el momento hemos creado dos componentes, heroe y listado y todos los
* modulos los he estado importando aca, pero ahora imaginemos  que tengo un apartado de ventas, con todos los componentes
* de ventas necesarios para que mi apartado funcione, pero resulta que mi cliente final nunca entra a eses apartado,
* entonces basicamente estaria cargando en mi aplicacion un monton de modulos que serian inecesarios, para eso es muy
* importante crear varios modulos y mandar a llamarlos cuando sean necesarios evitando el lazy load
*/
