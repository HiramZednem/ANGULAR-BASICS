import { Component } from '@angular/core';

//Esto es un decorador de componente, sirve para aniadirle propiedades extra usando el decorador
@Component({
  //esto le asigna el nombre al componente, en nuestro index se manda a llamar la etiqueta <app-root> haciendo referencia
  //a este selector
  selector: 'app-root',
  //Y aqui le estamos diciendo que tiene una contraparte en html
  templateUrl: './app.component.html'


  //  Esta forma se suele utilizar normalmente cuando los componentes no ocupan mas de 3 lineas.
  //   template:
  //   `
  //     <h1>
  //       Hola desde template
  //     </h1>
  //   `

})

export class AppComponent {

}
