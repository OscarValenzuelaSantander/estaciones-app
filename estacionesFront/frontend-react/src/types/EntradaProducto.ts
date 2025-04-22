import { Producto } from './Producto';

export interface EntradaProducto {
  id: number;
  producto: Producto;
  cantidad: number;
  fecha: string; // o Date si prefieres
}
