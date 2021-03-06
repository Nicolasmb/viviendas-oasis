
// Modelo de casa prefabricada
export interface PrefabricadaModel {
    
    id: string;
    nombre: string;
    tipo: string;
    superficie: string;
    galeria: boolean;
    dormitorios: number;
    isometria: string;
    planta: string;
    video_url: string;
    precio_lista?: string;
    precio_contado?: string;
    anticipo?: string;
    numero_cuotas?: number;
    cuota?: string;

}