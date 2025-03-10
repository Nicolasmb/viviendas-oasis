import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { PrefabricadaModel } from '../../models/prefabricada.model';
import { PrefabricadasService } from '../../services/prefabricadas.service';
import { Media, Config, LayoutStyle } from 'ng-opengallery';
import { GalleryItem, ImageItem } from 'ng-gallery';

// Se define un arreglo de constantes de las imagenes de las fabricas
const images_fabrica:    string[] = ["fabrica_1.jpg", "fabrica_2.jpg", "fabrica_3.jpg", "fabrica_4.jpg", "fabrica_5.jpg", 
                                     "fabrica_6.jpg", "fabrica_8.jpg", "fabrica_9.jpg", "fabrica_10.jpg"];
const imagenes_sucursales: string[] = ["oficinas_1.jpg", "oficinas_2.jpg", "oficinas_3.jpg", "oficinas_4.jpg", "oficinas_5.jpg",
                                     "oficinas_6.jpg", "oficinas_7.jpg", "oficinas_8.jpg", "oficinas_9.jpg", "oficinas_10.jpg",
                                     "oficinas_11.jpg", "oficinas_12.jpg", "oficinas_13.jpg"];

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public prefabricadas: PrefabricadaModel[] = [];
  // Se crean las url de las imagenes de la fabrica a partir de los nombres de las imágenes.
  public url_imagenes_fabrica   = images_fabrica.map(imagen => "./assets/images/fabrica/" + imagen);
  public galleryItem_fabrica: GalleryItem[];
  // Se crean las url de las imagenes de la oficina a partir de los nombres de las imágenes.
  public url_imagenes_sucursales = imagenes_sucursales.map(imagen => "./assets/images/oficinas/" + imagen);
  public galleryItem_sucursales: GalleryItem[];
  // Bandera para determinar si se colocan las imagenes miniaturas, o no, de las galerías de sucursales y fabrica.
  public thumb: boolean;
  // Altura de la imagen principal de las galerías de sucursales y fabrica.
  public altura_galeria: string;
  
  // Se crea una arreglo para alojar objetos Media para la galeria ng-opengallery.
  public data: Media[] = [];
  
  // Se crea un objeto de tipo Config. para la galeria ng-opengallery
  public config: Config = {
    diaporamaDuration: 2,
    layout: LayoutStyle.MASONRY,
    prefMediaHeight: 250,
    spacing: 1,
    viewerEnabled: true,
    enableAutoPlay: false,
  }

  public prefabricadasDestacadas: PrefabricadaModel[] = [];

  // Se inyectan en la presente clase los servicios PrefabricadasService,
  // el cual se encargará de proveer los datos de cada casa, y el servicio
  // Router, el cual se encargará de permitir la navegación a otras paginas.
  constructor( private _servicio: PrefabricadasService,
               private router: Router ) { 
              }
              
  ngOnInit(): void {
    // Se determina si se va a mostrar la vista miniatura de las galerías de empresa y sucursales en función del ancho de la pantalla.
    if( window.innerWidth > 1000 ) {
      this.thumb = true;
      this.altura_galeria = (document.getElementById("contenedor-galeria").offsetWidth * 0.55 + 133).toString() + 'px';
      console.log(this.altura_galeria);
    } else {
      // Si la pantalla es pequeña se desactiva la vista en miniatura.
      this.thumb = false;
      this.altura_galeria = (document.getElementById("contenedor-galeria").offsetWidth * 0.65).toString() + 'px';
    }

    // Al iniciarse el componente se descargan la información de las prefabricadas.
    this.prefabricadas = this._servicio.getPrefabricadas();

    // Cargar las prefabricadas destacadas por ID
    this.cargarPrefabricadasDestacadas([
      '42-M', '45-M', '48-M', '64-2H-M', '81-M', 
      '42-E', '45-E', '48-E', '64-2H-E', '81-E'
    ]);

    this.galleryItem_fabrica = this.url_imagenes_fabrica.map(imagen => new ImageItem({src: imagen, thumb: imagen}));
    this.galleryItem_sucursales = this.url_imagenes_sucursales.map(imagen => new ImageItem({src: imagen, thumb: imagen}));
    this.loadImagenesFabrica();
  }
  
  cargarPrefabricadasDestacadas(ids: string[]): void {
    // Para cada ID, buscamos la prefabricada correspondiente y la agregamos al array de destacadas
    this.prefabricadasDestacadas = ids
      .map(id => this.prefabricadas.find(p => p.id === id))
      .filter(p => p !== undefined); // Filtrar en caso de que algún ID no exista
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


  loadImagenesFabrica() {
    // Para cada nombre de las images de la galería se crea un objeto de tipo Media.
    for (var i=1; i < 45; i++) {
      this.data.push(new Media("./assets/images/galeria/" + i + ".jpg", i.toString()))
    }
  }

}
