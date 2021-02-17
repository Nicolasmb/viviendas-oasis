import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrefabricadaModel } from '../../models/prefabricada.model';
import { PrefabricadasService } from '../../services/prefabricadas.service';

// Se define un arreglo de constantes de las imagenes de las fabricas
const images_fabrica:    string[] = ["fabrica_1.jpg", "fabrica_2.jpg", "fabrica_3.jpg", "fabrica_4.jpg"];
const imagenes_oficinas: string[] = ["oficinas_1.jpg", "oficinas_3.jpg", "oficinas_4.jpg", "oficinas_7.jpg", "oficinas_8.jpg"];

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public prefabricadas: PrefabricadaModel[] = [];
  public url_imagenes_fabrica   = images_fabrica.map(imagen => "./assets/images/fabrica/" + imagen);
  public url_imagenes_sucursales = imagenes_oficinas.map(imagen => "./assets/images/oficinas/" + imagen);

  // Se inyectan en la presente clase los servicios PrefabricadasService,
  // el cual se encargará de proveer los datos de cada casa, y el servicio
  // Router, el cual se encargará de permitir la navegación a otras paginas.
  constructor( private _servicio: PrefabricadasService,
               private router: Router ) { 
  }

  ngOnInit(): void {
    console.log("Prefabricadas component");
    // Al iniciarse el componente se descargan la información de las prefabricadas.
    this.prefabricadas = this._servicio.getPrefabricadas();
  }
  
  // Función que recibe dos números enteros y devuelve un arreglo de números enteros 
  // con valores ascendentes dentro de los límites.
  array( n1: number, n2: number ) {
    let long = n2 - n1 + 1;
    return new Array(long).fill(null).map((_, index) => n1 + index);
  }


  // Método utilizado para la navegación a la pagina de cada prefabricada.
  verPrefabricada( id: string ) {
    // El método navigate, del router, recibe como argumento un arreglo de 
    // segmentos de url.
    this.router.navigate( ['/modelos', id] );
  }

}
