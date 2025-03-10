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
    // MODELOS 30
    {
      id: "30-M",
      nombre: "Vivienda Minimalista",
      tipo: "Minimalista",
      superficie: "30 m²",
      galeria: false,
      dormitorios: 2,
      isometria: "36.jpg",
      planta: "36.jpg",
      video_url: "https://www.youtube.com/embed/NL7l_dOWIdY",
      precio_lista: "$7.669.673",
      precio_contado: "$7.263.584",
      anticipo: "$2.978.069",
      numero_cuotas: 36,
      cuota: "$281.166", 
    },
    {
      id: "30-E",
      nombre: "Vivienda Emplacada",
      tipo: "Emplacada",
      superficie: "30 m²",
      galeria: false,
      dormitorios: 2,
      isometria: "36.jpg",
      planta: "36.jpg",
      video_url: "https://www.youtube.com/embed/ESB8UcNCg10",
      precio_lista: "$7.289.280",
      precio_contado: "$6.074.397",
      anticipo: "$2.490.502",
      numero_cuotas: 36,
      cuota: "$235.128",
    },
    // MODELOS 36
    {
      id: "36-M",
      nombre: "Vivienda Minimalista",
      tipo: "Minimalista",
      superficie: "36 m²",
      galeria: false,
      dormitorios: 2,
      isometria: "36.jpg",
      planta: "36.jpg",
      video_url: "https://www.youtube.com/embed/NL7l_dOWIdY",
      precio_lista: "$10.472.648",
      precio_contado: "$8.716.301",
      anticipo: "$3.573.683",
      numero_cuotas: 36,
      cuota: "$373.400",
    },
    {
      id: "36-E",
      nombre: "Vivienda Emplacada",
      tipo: "Emplacada",
      superficie: "36 m²",
      galeria: false,
      dormitorios: 2,
      isometria: "36.jpg",
      planta: "36.jpg",
      video_url: "https://www.youtube.com/embed/ESB8UcNCg10",
      precio_lista: "$8.747.130",
      precio_contado: "$7.289.276",
      anticipo: "$2.988.603",
      numero_cuotas: 36,
      cuota: "$282.155",
    },
    {
      id: "36-L",
      nombre: "Vivienda Chalet de ladrillos",
      tipo: "Chalet de Ladrillos",
      superficie: "36 m²",
      galeria: false,
      dormitorios: 2,
      isometria: "36.jpg",
      planta: "36.jpg",
      video_url: "https://www.youtube.com/embed/PNmGP9ELwlg",
      precio_lista: "$10.657.440",
      precio_contado: "$9.325.260",
      anticipo: "$3.530.625",
      numero_cuotas: 60,
      cuota: "$240.000"
    },
    {
      id: "36-S",
      nombre: "Vivienda Superboard Siding",
      tipo: "Superboard Siding",
      superficie: "36 m²",
      galeria: false,
      dormitorios: 2,
      isometria: "36.jpg",
      planta: "36.jpg",
      video_url: "https://www.youtube.com/embed/JA1Pg1rfPyg", // No tiene
      precio_lista: "$9.399.000",
      precio_contado: "$8.221.500",
      anticipo: "$3.370.815",
      numero_cuotas: 48,
      cuota: "$259.377",
    },

    // MODELOS 42
    {
      id: "42-M",
      nombre: "Vivienda Minimalista",
      tipo: "Minimalista",
      superficie: "42 m²",
      galeria: false,
      dormitorios: 2,
      isometria: "42.jpg", // No habia foto, se utilizó esta.
      planta: "42.jpg", // No habia foto, se utilizó esta.
      video_url: "https://www.youtube.com/embed/NL7l_dOWIdY", // No habia video, se utilizó esta.
      precio_lista: "$12.825.327",
      precio_contado: "$10.677.467",
      anticipo: "$4.377.760",
      cuota: "$413.315"
    },
    {
      id: "45-M",
      nombre: "Vivienda Minimalista",
      tipo: "Minimalista",
      superficie: "45 m²",
      galeria: false,
      dormitorios: 2,
      isometria: "42.jpg", // No habia foto, se utilizó esta.
      planta: "42.jpg", // No habia foto, se utilizó esta.
      video_url: "https://www.youtube.com/embed/NL7l_dOWIdY", // No habia video, se utilizó esta.
      precio_lista: "$12.584.108",
      precio_contado: "$11.440.087",
      anticipo: "$4.690.440",
      cuota: "$442.837"
    },
    {
      id: "42-E",
      nombre: "Vivienda Emplacada",
      tipo: "Emplacada",
      superficie: "42 m²",
      galeria: false,
      dormitorios: 2,
      isometria: "42.jpg",
      planta: "42.jpg",
      video_url: "https://www.youtube.com/embed/7NCM5uWMBzg",
      precio_lista: "$10.715.250",
      precio_contado: "$8.929.362",
      anticipo: "$3.661.038",
      cuota: "$345.639"
    },
    {
      id: "45-E",
      nombre: "Vivienda Emplacada",
      tipo: "Emplacada",
      superficie: "45 m²",
      galeria: false,
      dormitorios: 2,
      isometria: "42.jpg",
      planta: "42.jpg",
      video_url: "https://www.youtube.com/embed/7NCM5uWMBzg",
      precio_lista: "$11.481.645",
      precio_contado: "$9.567.174",
      anticipo: "$3.922.541",
      cuota: "$370.328"
    },
    {
      id: "42-L",
      nombre: "Vivienda Chalet de ladrillos",
      tipo: "Chalet de Ladrillos",
      superficie: "42 m²",
      galeria: false,
      dormitorios: 2,
      isometria: "42.jpg",
      planta: "42.jpg",
      video_url: "https://www.youtube.com/embed/zbpmgWmNk1c",
    },
    {
      id: "42-S",
      nombre: "Vivienda Superboard Siding",
      tipo: "Superboard Siding",
      superficie: "42 m²",
      galeria: false,
      dormitorios: 2,
      isometria: "42.jpg",
      planta: "42.jpg",
      video_url: "https://www.youtube.com/embed/i88r6VvTHMc",
    },

    // MODELOS 48
    {
      id: "48-M",
      nombre: "Vivienda Minimalista",
      tipo: "Minimalista",
      superficie: "48 m²",
      galeria: false,
      dormitorios: 2,
      isometria: "48.jpg", 
      planta: "48.jpg",
      video_url: "https://www.youtube.com/embed/NL7l_dOWIdY", // No habia video, se utilizó este.
      precio_lista: "$14.642.799",
      precio_contado: "$12.203.386",
      anticipo: "$5.003.156",
      cuota: "$472.360"
    },
    {
      id: "48-E",
      nombre: "Vivienda Emplacada",
      tipo: "Emplacada",
      superficie: "48 m²",
      galeria: false,
      dormitorios: 2,
      isometria: "48.jpg",
      planta: "48.jpg",
      video_url: "https://www.youtube.com/embed/e8Ifs2fwuTI",
      precio_lista: "$12.245.984",
      precio_contado: "$10.204.986",
      anticipo: "$4.184.044",
      cuota: "$395.017"
    },
    {
      id: "48-L",
      nombre: "Vivienda Chalet de ladrillos",
      tipo: "Chalet de Ladrillos",
      superficie: "48 m²",
      galeria: false,
      dormitorios: 2,
      isometria: "48.jpg",
      planta: "48.jpg",
      video_url: "https://www.youtube.com/embed/3QDCk3fGKGc" 
    },
    {
      id: "48-S",
      nombre: "Vivienda Superboard Siding",
      tipo: "Superboard Siding",
      superficie: "48 m²",
      galeria: false,
      dormitorios: 2,
      isometria: "48.jpg",
      planta: "48.jpg",
      video_url: "https://www.youtube.com/embed/vwpN-fglHa0"
    },

    // MODELOS 48G
    {
      id: "48G-M",
      nombre: "Vivienda Minimalista",
      tipo: "Minimalista",
      superficie: "48 m²",
      galeria: true,
      dormitorios: 2,
      isometria: "48G.jpg",
      planta: "48G.jpg",
      video_url: "https://www.youtube.com/embed/_TjdUvYKifU" // No habia video, se utilizó este.
    },
    {
      id: "48G-E",
      nombre: "Vivienda Emplacada",
      tipo: "Emplacada",
      superficie: "48 m²",
      galeria: true,
      dormitorios: 2,
      isometria: "48G.jpg",
      planta: "48G.jpg",
      video_url: "https://www.youtube.com/embed/hexnRynq0P8"
    },
    {
      id: "48G-L",
      nombre: "Vivienda Chalet de ladrillos",
      tipo: "Chalet de Ladrillos",
      superficie: "48 m²",
      galeria: true,
      dormitorios: 2,
      isometria: "48G.jpg",
      planta: "48G.jpg",
      video_url: "https://www.youtube.com/embed/2_0WUd0GjPc"
    },
    {
      id: "48G-S",
      nombre: "Vivienda Superboard Siding",
      tipo: "Superboard Siding",
      superficie: "48 m²",
      galeria: true,
      dormitorios: 2,
      isometria: "48G.jpg",
      planta: "48G.jpg",
      video_url: "https://www.youtube.com/embed/4Qh3K2tpNCc"
    },

    // MODELOS 54
    {
      id: "54-M",
      nombre: "Vivienda Minimalista",
      tipo: "Minimalista",
      superficie: "54 m²",
      galeria: false,
      dormitorios: 2,
      isometria: "54.jpg", // No habia foto, se utilizó esta.
      planta: "",
      video_url: "https://www.youtube.com/embed/NL7l_dOWIdY", // No habia video, se utilizó esta.
    },
    {
      id: "54-E",
      nombre: "Vivienda Emplacada",
      tipo: "Emplacada",
      superficie: "54 m²",
      galeria: false,
      dormitorios: 2,
      isometria: "54.jpg",
      planta: "",
      video_url: "https://www.youtube.com/embed/NDCCYsJpMCQ"
    },
    {
      id: "54-L",
      nombre: "Vivienda Chalet de ladrillos",
      tipo: "Chalet de Ladrillos",
      superficie: "54 m²",
      galeria: false,
      dormitorios: 2,
      isometria: "54.jpg",
      planta: "",
      video_url: "https://www.youtube.com/embed/-nImjUFh2aY"
    },
    {
      id: "54-S",
      nombre: "Vivienda Superboard Siding",
      tipo: "Superboard Siding",
      superficie: "54 m²",
      galeria: false,
      dormitorios: 2,
      isometria: "54.jpg",
      planta: "",
      video_url: "https://www.youtube.com/embed/wazT6hkVlSw"
    },

    
    // MODELOS 54G
    {
      id: "54G-M",
      nombre: "Vivienda Minimalista",
      tipo: "Minimalista",
      superficie: "54 m²",
      galeria: true,
      dormitorios: 2,
      isometria: "54G.jpg",
      planta: "54G.jpg",
      video_url: "https://www.youtube.com/embed/_TjdUvYKifU"
    },
    {
      id: "54G-E",
      nombre: "Vivienda Emplacada",
      tipo: "Emplacada",
      superficie: "54 m²",
      galeria: true,
      dormitorios: 2,
      isometria: "54G.jpg",
      planta: "54G.jpg",
      video_url: "https://www.youtube.com/embed/KcYXF-F7UdM"
    },
    {
      id: "54G-L",
      nombre: "Vivienda Chalet de ladrillos",
      tipo: "Chalet de Ladrillos",
      superficie: "54 m²",
      galeria: true,
      dormitorios: 2,
      isometria: "54G.jpg",
      planta: "54G.jpg",
      video_url: "https://www.youtube.com/embed/r5qeo6kuIfg"
    },
    {
      id: "54G-S",
      nombre: "Vivienda Superboard Siding",
      tipo: "Superboard Siding",
      superficie: "54 m²",
      galeria: true,
      dormitorios: 2,
      isometria: "54G.jpg",
      planta: "54G.jpg",
      video_url: "https://www.youtube.com/embed/tA1mYsfb3g8"
    },

    // MODELOS 64-2H
    {
      id: "64-2H-M",
      nombre: "Vivienda Minimalista",
      tipo: "Minimalista",
      superficie: "64 m²",
      galeria: false,
      dormitorios: 2,
      isometria: "64 (2H).jpg",
      planta: "64-2H.jpg",
      video_url: "https://www.youtube.com/embed/v1y0NCMKjI4",
      precio_lista: "$19.539.552",
      precio_contado: "$16.270.428",
      anticipo: "$6.670.874",
      cuota: "$629.812"
    },
    {
      id: "64-2H-E",
      nombre: "Vivienda Emplacada",
      tipo: "Emplacada",
      superficie: "64 m²",
      galeria: false,
      dormitorios: 2,
      isometria: "64 (2H).jpg",
      planta: "64-2H.jpg",
      video_url: "https://www.youtube.com/embed/wOkrSAuWDXI",
      precio_lista: "$16.327.977",
      precio_contado: "$13.606.648",
      anticipo: "$5.578.725",
      cuota: "$526.688"
    },
    {
      id: "64-2H-L",
      nombre: "Vivienda Chalet de ladrillos",
      tipo: "Chalet de Ladrillos",
      superficie: "64 m²",
      galeria: false,
      dormitorios: 2,
      isometria: "64 (2H).jpg",
      planta: "64-2H.jpg",
      video_url: "https://www.youtube.com/embed/HzqiBszYLdc"
    },
    {
      id: "64-2H-S",
      nombre: "Vivienda Superboard Siding",
      tipo: "Superboard Siding",
      superficie: "64 m²",
      galeria: false,
      dormitorios: 2,
      isometria: "64 (2H).jpg",
      planta: "64-2H.jpg",
      video_url: "https://www.youtube.com/embed/eIu3DdUy9Yw"
    },

    // MODELOS 64-3H
    {
      id: "64-3H-M",
      nombre: "Vivienda Minimalista",
      tipo: "Minimalista",
      superficie: "64 m²",
      galeria: false,
      dormitorios: 3,
      isometria: "64 (2H).jpg",
      planta: "64-2H.jpg",
      video_url: "https://www.youtube.com/embed/v1y0NCMKjI4"
    },
    {
      id: "64-3H-E",
      nombre: "Vivienda Emplacada",
      tipo: "Emplacada",
      superficie: "64 m²",
      galeria: false,
      dormitorios: 3,
      isometria: "64 (3H).jpg",
      planta: "64-3H.jpg",
      video_url: "https://www.youtube.com/embed/SZo19weiY1k"
    },
    {
      id: "64-3H-L",
      nombre: "Vivienda Chalet de ladrillos",
      tipo: "Chalet de Ladrillos",
      superficie: "64 m²",
      galeria: false,
      dormitorios: 3,
      isometria: "64 (3H).jpg",
      planta: "64-3H.jpg",
      video_url: "https://www.youtube.com/embed/35S7K059p1g"
    },
    {
      id: "64-3H-S",
      nombre: "Vivienda Superboard Siding",
      tipo: "Superboard Siding",
      superficie: "64 m²",
      galeria: false,
      dormitorios: 3,
      isometria: "64 (3H).jpg",
      planta: "64-3H.jpg",
      video_url: "https://www.youtube.com/embed/Yc2khVLovkM"
    },

     // MODELOS 64G-2H
     {
      id: "64G-2H-M",
      nombre: "Vivienda Minimalista",
      tipo: "Minimalista",
      superficie: "64 m²",
      galeria: true,
      dormitorios: 2,
      isometria: "64G (2H).jpg",
      planta: "64G-2H.jpg",
      video_url: "https://www.youtube.com/embed/_TjdUvYKifU"
    },
     {
      id: "64G-2H-E",
      nombre: "Vivienda Emplacada",
      tipo: "Emplacada",
      superficie: "64 m²",
      galeria: true,
      dormitorios: 2,
      isometria: "64G (2H).jpg",
      planta: "64G-2H.jpg",
      video_url: "https://www.youtube.com/embed/EkaHP8J86P0"
    },
    {
      id: "64G-2H-L",
      nombre: "Vivienda Chalet de ladrillos",
      tipo: "Chalet de Ladrillos",
      superficie: "64 m²",
      galeria: true,
      dormitorios: 2,
      isometria: "64G (2H).jpg",
      planta: "64G-2H.jpg",
      video_url: "https://www.youtube.com/embed/1M8DPOJ-AHU"
    },
    {
      id: "64G-2H-S",
      nombre: "Vivienda Superboard Siding",
      tipo: "Superboard Siding",
      superficie: "64 m²",
      galeria: true,
      dormitorios: 2,
      isometria: "64G (2H).jpg",
      planta: "64G-2H.jpg",
      video_url: "https://www.youtube.com/embed/NUse8o5-usQ"
    },

    // MODELOS 64G-3H
    {
      id: "64G-3H-M",
      nombre: "Vivienda Minimalista",
      tipo: "Minimalista",
      superficie: "64 m²",
      galeria: true,
      dormitorios: 3,
      isometria: "64G (3H).jpg",
      planta: "64G-3H.jpg",
      video_url: "https://www.youtube.com/embed/WjTqBL7PpIA"
    },
    {
      id: "64G-3H-E",
      nombre: "Vivienda Emplacada",
      tipo: "Emplacada",
      superficie: "64 m²",
      galeria: true,
      dormitorios: 3,
      isometria: "64G (3H).jpg",
      planta: "64G-3H.jpg",
      video_url: "https://www.youtube.com/embed/GgE1p91FWeE"
    },
    {
      id: "64G-3H-L",
      nombre: "Vivienda Chalet de ladrillos",
      tipo: "Chalet de Ladrillos",
      superficie: "64 m²",
      galeria: true,
      dormitorios: 3,
      isometria: "64G (3H).jpg",
      planta: "64G-3H.jpg",
      video_url: "https://www.youtube.com/embed/AKteKH9OcUc"
    },
    {
      id: "64G-3H-S",
      nombre: "Vivienda Superboard Siding",
      tipo: "Superboard Siding",
      superficie: "64 m²",
      galeria: true,
      dormitorios: 3,
      isometria: "64G (3H).jpg",
      planta: "64G-3H.jpg",
      video_url: "https://www.youtube.com/embed/b055DZ9hyio"
    },

    // MODELOS 81
    {
      id: "81-M",
      nombre: "Vivienda Minimalista",
      tipo: "Minimalista",
      superficie: "81 m²",
      galeria: false,
      dormitorios: 3,
      isometria: "81.jpg",
      planta: "81.jpg",
      video_url: "https://www.youtube.com/embed/v1y0NCMKjI4",
      precio_lista: "$24.702.875",
      precio_contado: "$20.592.260",
      anticipo: "$8.442.826",
      cuota: "$797.105"
    },
    {
      id: "81-E",
      nombre: "Vivienda Emplacada",
      tipo: "Emplacada",
      superficie: "81 m²",
      galeria: false,
      dormitorios: 3,
      isometria: "81.jpg",
      planta: "81.jpg",
      video_url: "https://www.youtube.com/embed/NSYbww4QARU",
      precio_lista: "$20.665.100",
      precio_contado: "$17.220.914",
      anticipo: "$7.060.574",
      cuota: "$666.578"
    },
    {
      id: "81-L",
      nombre: "Vivienda Chalet de ladrillos",
      tipo: "Chalet de Ladrillos",
      superficie: "81 m²",
      galeria: false,
      dormitorios: 3,
      isometria: "81.jpg",
      planta: "81.jpg",
      video_url: "https://www.youtube.com/embed/mmvjqu7D6WI"
    },
    {
      id: "81-S",
      nombre: "Vivienda Superboard Siding",
      tipo: "Superboard Siding",
      superficie: "81 m²",
      galeria: false,
      dormitorios: 3,
      isometria: "81.jpg",
      planta: "81.jpg",
      video_url: "https://www.youtube.com/embed/r5sAWTzgkT4"
    },

    // MODELOS 81G
    {
      id: "81G-M",
      nombre: "Vivienda Minimalista",
      tipo: "Minimalista",
      superficie: "81 m²",
      galeria: true,
      dormitorios: 2,
      isometria: "81G.jpg",
      planta: "81G.jpg",
      video_url: "https://www.youtube.com/embed/_TjdUvYKifU"
    },
    {
      id: "81G-E",
      nombre: "Vivienda Emplacada",
      tipo: "Emplacada",
      superficie: "81 m²",
      galeria: true,
      dormitorios: 2,
      isometria: "81G.jpg",
      planta: "81G.jpg",
      video_url: "https://www.youtube.com/embed/iZ2sYg9Xgys"
    },
    {
      id: "81G-L",
      nombre: "Vivienda Chalet de ladrillos",
      tipo: "Chalet de Ladrillos",
      superficie: "81 m²",
      galeria: true,
      dormitorios: 2,
      isometria: "81G.jpg",
      planta: "81G.jpg",
      video_url: "https://www.youtube.com/embed/IVT0cMDvffA"
    },
    {
      id: "81G-S",
      nombre: "Vivienda Superboard Siding",
      tipo: "Superboard Siding",
      superficie: "81 m²",
      galeria: true,
      dormitorios: 2,
      isometria: "81G.jpg",
      planta: "81G.jpg",
      video_url: "https://www.youtube.com/embed/03V-0LIg4BM"
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
        "Ventanas de aluminio blanco 1,50 x 1,00  con vidrios colocados.",
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
