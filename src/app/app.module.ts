// El NgModule permite definir que es lo que maneja el módulo.
// Se importa de la carpeta Angular.
import { NgModule } from '@angular/core';
// El BrowserModule permite que la aplicación corrar en los navegadores.
// Se importa de la carpeta Angular.
import { BrowserModule } from '@angular/platform-browser';
// Se importa el módulo de ruteo.
import { AppRoutingModule } from './app-routing.module';
// Se importa el componenete AppComponent.
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';


// Cada aplicación tiene al menos un módulo Angular, el módulo raíz, que debe 
// estar presente para arrancar la aplicación en el lanzamiento. 
// Por convención y de forma predeterminada, este NgModule se llama AppModule.

// Un decorador es una función de Angular, con su nombre precedido con el signo @,
// que aporta operativa a la clase con la que estamos trabajando

@NgModule({
  declarations: [
  // Se declaran los componentes que se usan en este módulo.
    AppComponent,
    NavbarComponent,
    CarouselComponent,
  ],
  imports: [
  //  Bajo este epígrafe se declaran las importaciones que son necesarias para
  //  que este módulo funcione correctamente.
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  // Con el metadato "bootstrap" (arranque) se define el componente raíz que Angular
  // creará e insertará en la página web de host index.html.
  // Puede traducirse por «arranque» o «inicio», almacena una matriz con los nombres
  // de los componentes que tienen que cargarse cuando se inicia el módulo.
  bootstrap: [AppComponent]
})
export class AppModule { }
