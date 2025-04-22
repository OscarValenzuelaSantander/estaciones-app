import axios from 'axios';
import { Producto } from '../types/Producto';

const API_URL = 'http://localhost:8080/api/productos';

export const obtenerProductos = () => {
  return axios.get<Producto[]>(API_URL);
};

export const guardarProducto = (producto: Omit<Producto, 'id'>) => {
  return axios.post<Producto>(API_URL, producto);
};
