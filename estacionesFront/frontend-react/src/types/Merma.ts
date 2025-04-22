import { Producto } from './Producto';

export interface Merma {
  id: number;
  producto: Producto;
  cantidad: number;
  motivo: string;
  fecha: string;
}
