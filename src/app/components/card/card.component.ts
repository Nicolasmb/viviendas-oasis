import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { PrefabricadaModel } from 'src/app/models/prefabricada.model';
import { PrefabricadasService } from '../../services/prefabricadas.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  // Decorador que marca un campo de clase como una propiedad de entrada
  // y proporciona metadatos de configuración.
  // La propiedad de entrada está vinculada a una propiedad DOM en la plantilla.
  @Input() prefabricada: PrefabricadaModel;

  @Input() precio: boolean;

  // Decorador que marca un campo de clase como una propiedad de salida y proporciona
  // metadatos de configuración. La propiedad DOM vinculada a la propiedad de salida 
  // se actualiza automáticamente durante la detección de cambios.
  @Output() modeloSeleccionado: EventEmitter<string>;
  
  // Se inyecta el servicio proveedor de datos y el servicio Router para la navegación.
  constructor(public ps: PrefabricadasService,
              private router: Router) {
    // Se instancia un EventEmitter, un objeto utilizado para emitir eventos personalizados 
    // de forma sincrónica o asincrónica, y registrar handlers para esos eventos.
    // this.modeloSeleccionado = new EventEmitter();
   }

  ngOnInit(): void {
  }
  
  // Método que recibe un "id" de un módelo de una casa y navega a la pagina correspondiente.
  verModelo() {
    this.router.navigate(['/modelos', this.prefabricada.id])
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

}
