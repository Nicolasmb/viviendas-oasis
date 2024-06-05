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
      html: `<div><p><span style="font-weight: bold">El número de Whatsapp 11-5637-9816 NO pertenece a la empresa Viviendas Oasis</span>.
      Comuniquese con nosotros a través del botón de Whatsapp de esta página, nuestro formulario de contacto o personalmente en nuestras sucursales.</p></div>`,
      showCloseButton: true,
      confirmButtonColor: '#000000',
      confirmButtonText: 'Cerrar'
    })
  }

}
