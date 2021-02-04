import { Injectable } from '@angular/core';

// MODELOS DE LA INFORMACION
import { PrefabricadaModel } from '../models/prefabricada.model';
import { EspecificacionModel } from '../models/especificacion.model';


// Servicio encargado de proveer la información de cada modelo de casa prefabricada.
@Injectable({
  providedIn: 'root'
})
export class PrefabricadasService {

  private prefabricadas: PrefabricadaModel[] = [

    // MODELOS 36
    {
      id: "36-E",
      nombre: "Vivienda Emplacada",
      tipo: "Emplacada",
      superficie: "36 m²",
      galeria: false,
      dormitorios: 2,
      isometria: "36.png"
    },
    {
      id: "36-L",
      nombre: "Vivienda Chalet de ladrillos",
      tipo: "Chalet de Ladrillos",
      superficie: "36 m²",
      galeria: false,
      dormitorios: 2,
      isometria: "36.png"
    },
    {
      id: "36-S",
      nombre: "Vivienda Superboard Siding",
      tipo: "Superboard Siding",
      superficie: "36 m²",
      galeria: false,
      dormitorios: 2,
      isometria: "36.png"
    },
    {
      id: "36-M",
      nombre: "Vivienda Minimalista",
      tipo: "Minimalista",
      superficie: "36 m²",
      galeria: false,
      dormitorios: 2,
      isometria: "36.png"
    },

    // MODELOS 42
    {
      id: "42-E",
      nombre: "Vivienda Emplacada",
      tipo: "Emplacada",
      superficie: "42 m²",
      galeria: false,
      dormitorios: 2,
      isometria: "42.png"
    },
    {
      id: "42-L",
      nombre: "Vivienda Chalet de ladrillos",
      tipo: "Chalet de Ladrillos",
      superficie: "42 m²",
      galeria: false,
      dormitorios: 2,
      isometria: "42.png"
    },
    {
      id: "42-S",
      nombre: "Vivienda Superboard Siding",
      tipo: "Superboard Siding",
      superficie: "42 m²",
      galeria: false,
      dormitorios: 2,
      isometria: "42.png"
    },

    // MODELOS 48
    {
      id: "48-E",
      nombre: "Vivienda Emplacada",
      tipo: "Emplacada",
      superficie: "48 m²",
      galeria: false,
      dormitorios: 2,
      isometria: "48.png"
    },
    {
      id: "48-L",
      nombre: "Vivienda Chalet de ladrillos",
      tipo: "Chalet de Ladrillos",
      superficie: "48 m²",
      galeria: false,
      dormitorios: 2,
      isometria: "48.png"
    },
    {
      id: "48-S",
      nombre: "Vivienda Superboard Siding",
      tipo: "Superboard Siding",
      superficie: "48 m²",
      galeria: false,
      dormitorios: 2,
      isometria: "48.png"
    },

    // MODELOS 48G
    {
      id: "48G-E",
      nombre: "Vivienda Emplacada",
      tipo: "Emplacada",
      superficie: "48 m²",
      galeria: true,
      dormitorios: 2,
      isometria: "48G.png"
    },
    {
      id: "48G-L",
      nombre: "Vivienda Chalet de ladrillos",
      tipo: "Chalet de Ladrillos",
      superficie: "48 m²",
      galeria: true,
      dormitorios: 2,
      isometria: "48G.png"
    },
    {
      id: "48G-S",
      nombre: "Vivienda Superboard Siding",
      tipo: "Superboard Siding",
      superficie: "48 m²",
      galeria: true,
      dormitorios: 2,
      isometria: "48G.png"
    },

    // MODELOS 54
    {
      id: "54-E",
      nombre: "Vivienda Emplacada",
      tipo: "Emplacada",
      superficie: "54 m²",
      galeria: false,
      dormitorios: 2,
      isometria: "54.png"
    },
    {
      id: "54-L",
      nombre: "Vivienda Chalet de ladrillos",
      tipo: "Chalet de Ladrillos",
      superficie: "54 m²",
      galeria: false,
      dormitorios: 2,
      isometria: "54.png"
    },
    {
      id: "54-S",
      nombre: "Vivienda Superboard Siding",
      tipo: "Superboard Siding",
      superficie: "54 m²",
      galeria: false,
      dormitorios: 2,
      isometria: "54.png"
    },

    
    // MODELOS 54G
    {
      id: "54G-E",
      nombre: "Vivienda Emplacada",
      tipo: "Emplacada",
      superficie: "54 m²",
      galeria: true,
      dormitorios: 2,
      isometria: "54G.png"
    },
    {
      id: "54G-L",
      nombre: "Vivienda Chalet de ladrillos",
      tipo: "Chalet de Ladrillos",
      superficie: "54 m²",
      galeria: true,
      dormitorios: 2,
      isometria: "54G.png"
    },
    {
      id: "54G-S",
      nombre: "Vivienda Superboard Siding",
      tipo: "Superboard Siding",
      superficie: "54 m²",
      galeria: true,
      dormitorios: 2,
      isometria: "54G.png"
    },

    // MODELOS 64-2H
    {
      id: "64-2H-E",
      nombre: "Vivienda Emplacada",
      tipo: "Emplacada",
      superficie: "64 m²",
      galeria: false,
      dormitorios: 2,
      isometria: "64 (2H).png"
    },
    {
      id: "64-2H-L",
      nombre: "Vivienda Chalet de ladrillos",
      tipo: "Chalet de Ladrillos",
      superficie: "64 m²",
      galeria: false,
      dormitorios: 2,
      isometria: "64 (2H).png"
    },
    {
      id: "64-2H-S",
      nombre: "Vivienda Superboard Siding",
      tipo: "Superboard Siding",
      superficie: "64 m²",
      galeria: false,
      dormitorios: 2,
      isometria: "64 (2H).png"
    },

    // MODELOS 64-3H
    {
      id: "64-3H-E",
      nombre: "Vivienda Emplacada",
      tipo: "Emplacada",
      superficie: "64 m²",
      galeria: false,
      dormitorios: 3,
      isometria: "64 (3H).png"
    },
    {
      id: "64-3H-L",
      nombre: "Vivienda Chalet de ladrillos",
      tipo: "Chalet de Ladrillos",
      superficie: "64 m²",
      galeria: false,
      dormitorios: 3,
      isometria: "64 (3H).png"
    },
    {
      id: "64-3H-S",
      nombre: "Vivienda Superboard Siding",
      tipo: "Superboard Siding",
      superficie: "64 m²",
      galeria: false,
      dormitorios: 3,
      isometria: "64 (3H).png"
    },

     // MODELOS 64G-2H
     {
      id: "64G-2H-E",
      nombre: "Vivienda Emplacada",
      tipo: "Emplacada",
      superficie: "64 m²",
      galeria: true,
      dormitorios: 2,
      isometria: "64G (2H).png"
    },
    {
      id: "64G-2H-L",
      nombre: "Vivienda Chalet de ladrillos",
      tipo: "Chalet de Ladrillos",
      superficie: "64 m²",
      galeria: true,
      dormitorios: 2,
      isometria: "64G (2H).png"
    },
    {
      id: "64G-2H-S",
      nombre: "Vivienda Superboard Siding",
      tipo: "Superboard Siding",
      superficie: "64 m²",
      galeria: true,
      dormitorios: 2,
      isometria: "64G (2H).png"
    },

    // MODELOS 64G-3H
    {
      id: "64G-3H-E",
      nombre: "Vivienda Emplacada",
      tipo: "Emplacada",
      superficie: "64 m²",
      galeria: true,
      dormitorios: 3,
      isometria: "64G (3H).png"
    },
    {
      id: "64G-3H-L",
      nombre: "Vivienda Chalet de ladrillos",
      tipo: "Chalet de Ladrillos",
      superficie: "64 m²",
      galeria: true,
      dormitorios: 3,
      isometria: "64G (3H).png"
    },
    {
      id: "64G-3H-S",
      nombre: "Vivienda Superboard Siding",
      tipo: "Superboard Siding",
      superficie: "64 m²",
      galeria: true,
      dormitorios: 3,
      isometria: "64G (3H).png"
    },
    {
      id: "64G-3H-M",
      nombre: "Vivienda Minimalista",
      tipo: "Minimalista",
      superficie: "64 m²",
      galeria: true,
      dormitorios: 3,
      isometria: "64G (3H).png"
    },

     // MODELOS 81
     {
      id: "81-E",
      nombre: "Vivienda Emplacada",
      tipo: "Emplacada",
      superficie: "81 m²",
      galeria: false,
      dormitorios: 3,
      isometria: "81.png"
    },
    {
      id: "81-L",
      nombre: "Vivienda Chalet de ladrillos",
      tipo: "Chalet de Ladrillos",
      superficie: "81 m²",
      galeria: false,
      dormitorios: 3,
      isometria: "81.png"
    },
    {
      id: "81-S",
      nombre: "Vivienda Superboard Siding",
      tipo: "Superboard Siding",
      superficie: "81 m²",
      galeria: false,
      dormitorios: 3,
      isometria: "81.png"
    },
    {
      id: "81-M",
      nombre: "Vivienda Minimalista",
      tipo: "Minimalista",
      superficie: "81 m²",
      galeria: false,
      dormitorios: 3,
      isometria: "81.png"
    },

    // MODELOS 81G
    {
      id: "81G-E",
      nombre: "Vivienda Emplacada",
      tipo: "Emplacada",
      superficie: "81 m²",
      galeria: true,
      dormitorios: 3,
      isometria: "81G.png"
    },
    {
      id: "81G-L",
      nombre: "Vivienda Chalet de ladrillos",
      tipo: "Chalet de Ladrillos",
      superficie: "81 m²",
      galeria: true,
      dormitorios: 3,
      isometria: "81G.png"
    },
    {
      id: "81G-S",
      nombre: "Vivienda Superboard Siding",
      tipo: "Superboard Siding",
      superficie: "81 m²",
      galeria: true,
      dormitorios: 3,
      isometria: "81G.png"
    },
    {
      id: "81G-M",
      nombre: "Vivienda Minimalista",
      tipo: "Minimalista",
      superficie: "81 m²",
      galeria: true,
      dormitorios: 3,
      isometria: "81G.png"
    },
  ]
  

  private espeficicaciones: EspecificacionModel[] = [

    // ESPECIFICACIONES: VIVIENDA EMPLACADA
    { 
      nombre: "Vivienda Emplacada",
      paredes: [
        "Paredes externas en placas cementicias Superboard liso preparado para pintar o revestir.",
        "Paredes interiores en placas de yeso Durlock.",
        "Divisiones interiores revestidas de ambos lados en placas de yeso Durlock."],
      aberturas: [
        "Ventanas de aluminio blanco 1,50 x 1,50  con vidrios colocados.",
        "Puerta de entrada metálica.",
      ],
      techo: [
        "Techo de chapa acanalada aluminizada.",
      ],
      cielorrasos: [
        "Madera machimbrada o placa de yeso Durlock.",
      ],
      instalaciones: [
        "Panel sanitario de agua fría y caliente.",
        "Caños cajas y bocas de luz embutidas (sin cables ni llaves).",
      ]
    },

    // ESPECIFICACIONES: VIVIENDA CHALET DE LADRILLOS
    { 
      nombre: "Vivienda Chalet de ladrillos",
      paredes: [
        "Paredes externas en ladrillo de 15cm con junta tomada.",
        "Paredes interiores en placas de yeso Durlock.",
        "Divisiones interiores de ambos lados revestidas en placas de yeso Durlock.",
      ],
      aberturas: [
        "Ventanas de aluminio blanco de 1,50 x 1,50 con vidrios colocados.",
        "Puerta de entrada metálica.",
        "Puertas placas interiores.",
      ],
      techo: [
        "Techo de chapa acanalada aluminizada.",
      ],
      cielorrasos: [
        "Madera machimbrada o placa de yeso Durlock.",
      ],
      instalaciones: [
        "Panel sanitario de agua fría y caliente.",
        "Caños cajas y bocas de luz embutidas (sin cables ni llaves).",
      ]
    },

    // ESPECIFICACIONES: VIVIENDA SUPERBOARD SIDING
    { 
      nombre: "Vivienda Superboard Siding",
      paredes: [
        "Paredes externas en placas cementicias Superboard Siding Texturizado.",
        "Paredes interiores en placas de yeso Durlock.",
        "Divisiones interiores revestidas de ambos lados en placas de yeso Durlock.",
      ],
      aberturas: [
        "Ventanas de aluminio blanco de 1,50 x 1,50 con vidrios colocados.",
        "Puerta de entrada metálica.",
      ],
      techo: [
        "Techo de chapa acanalada aluminizada .",
      ],
      cielorrasos: [
        "Madera machimbrada o placa de yeso Durlock.",
      ],
      instalaciones: [
        "Panel sanitario de agua fría y caliente.",
        "Caños cajas y bocas de luz embutidas (sin cables ni llaves).",
      ]
    },

    // ESPECIFICACIONES: VIVIENDA MINIMALISTA
    { 
      nombre: "Vivienda Minimalista",
      paredes: [
        "Paredes externas en placas cementicias Superboard liso.",
        "Paredes interiores en placas de yeso Durlock.",
        "Divisiones interiores revestidas de ambos lados en placas de yeso Durlock.",
      ],
      aberturas: [
        "Ventanas de aluminio blanco de 1,50 x 1,50 con vidrios colocados.",
        "Puerta de entrada metálica.",
      ],
      techo: [
        "Techo de chapa acanalada aluminizada .",
      ],
      cielorrasos: [
        "Madera machimbrada o placa de yeso Durlock.",
      ],
      instalaciones: [
        "Panel sanitario de agua fría y caliente.",
        "Caños cajas y bocas de luz embutidas (sin cables ni llaves).",
      ]
    }
  ]


  constructor() { }
  
  getPrefabricada(id: string): PrefabricadaModel {
    // Devuelve el item del vector "prefabricadas" que comienza con el "id" dado.
    return this.prefabricadas.find(x => x.id === id);
  }
  
  getPrefabricadas(): PrefabricadaModel[] {
    return this.prefabricadas;
  }

  getEspecificacion(nombre: string): EspecificacionModel {
    // Devuelve el item del vector "especificaciones" que comienza con el "nombre" dado.
    return this.espeficicaciones.find(x => x.nombre === nombre);
  }

}
