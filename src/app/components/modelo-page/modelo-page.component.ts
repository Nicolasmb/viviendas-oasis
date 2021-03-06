import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrefabricadaModel } from 'src/app/models/prefabricada.model';
import { PrefabricadasService } from '../../services/prefabricadas.service';
import { EspecificacionModel } from '../../models/especificacion.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-modelo-page',
  templateUrl: './modelo-page.component.html',
  styleUrls: ['./modelo-page.component.css']
})
export class ModeloPageComponent {

  prefabricada: PrefabricadaModel;
  especificacion: EspecificacionModel;

  constructor( private activatedRoute: ActivatedRoute,
               private _service: PrefabricadasService ) {

    this.activatedRoute.params.subscribe( params => {
      this.prefabricada = this._service.getPrefabricada( params['id'] );
      this.especificacion = this._service.getEspecificacion(this.prefabricada.nombre);
      // console.log(this.prefabricada);
    })
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    window.scrollTo(0,0);
  }

  numeroAtexto(n: number): string {
    switch (n) {
      case 2: {
        return "dos";
      };
      case 3: {
        return "tres"
      }
    }
  }

  mostrarIsometrica(url: string) {
    Swal.fire({
      // imageUrl: `./assets/images/isometricas/${this.prefabricada.isometria}`,
      // imageWidth: 2400,
      showCloseButton: false,
      showConfirmButton: false,
      imageUrl: url,
      // imageHeight: 800,
      width: '1000px',
      background: '#ffff',
    })
  }

}