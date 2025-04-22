import { Producto } from './Producto';
import { Trabajador } from './Trabajador';

export interface AsignacionProducto {
  id: number;
  producto: Producto;
  trabajador: Trabajador;
  cantidad: number;
  fecha: string;
}
