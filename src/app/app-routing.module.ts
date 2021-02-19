import { NgModule } from '@angular/core';
// Routes: Representa una configuración de ruta para el Router service.
// RouterModule: Agrega directivas y proveedores para la navegación en la aplicación 
// entre las vistas definidas en una aplicación. 
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ModeloPageComponent } from './components/modelo-page/modelo-page.component';

// Reglas de ruteo: para una determinada URL, que se encuentre en 
// el navegador, mostraremos un determinado componenete.
const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'modelos/:id', component: ModeloPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', scrollPositionRestoration: 'enabled',},)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
