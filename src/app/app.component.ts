import { AfterViewInit, Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'viviendas-oasis';
  public telefono = "541157292823";
  public mensaje = "Hola!"

  ngAfterViewInit(): void {
    Swal.fire({
      title: 'ALERTA!',
      icon: 'warning',
      html: `
        <div>
          <p>
            <span style="font-weight: bold">
              Nuestra sucursal en San Martín ha cerrado definitivamente. 
              Cualquier persona que afirme trabajar en esta ubicación está estafando.
            </span>
            <br>
            <br>
            Por favor, no realice pagos ni proporcione información personal.
            Para cualquier consulta, comuníquese con nuestras sucursales activas o a través de nuestros canales oficiales.
          </p>
        </div>
      `,
      showCloseButton: true,
      confirmButtonColor: '#000000',
      confirmButtonText: 'Cerrar'
    })
  }

}
