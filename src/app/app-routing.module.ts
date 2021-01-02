import { NgModule } from '@angular/core';
// Routes: Representa una configuración de ruta para el Router service.
// RouterModule: Agrega directivas y proveedores para la navegación en la aplicación 
// entre las vistas definidas en una aplicación. 
import { Routes, RouterModule } from '@angular/router';

// Reglas de ruteo: para una determinada URL, que se encuentre en 
// el navegador, mostraremos un determinado componenete.
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
