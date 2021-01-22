import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrefabricadaModel } from '../../models/prefabricada.model';
import { PrefabricadasService } from '../../services/prefabricadas.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public prefabricadas: PrefabricadaModel[] = []

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

  // Método utilizado para la navegación a la pagina de cada prefabricada.
  verPrefabricada( id: string ) {
    // El método navigate, del router, recibe como argumento un arreglo de 
    // segmentos de url.
    this.router.navigate( ['/modelos', id] );
  }

}
