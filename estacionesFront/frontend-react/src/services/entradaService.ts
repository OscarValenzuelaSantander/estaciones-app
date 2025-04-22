import axios from 'axios';
import { EntradaProducto } from '../types/EntradaProducto';

const API_URL = 'http://localhost:8080/api/entradas';

export const obtenerEntradas = () => {
  return axios.get<EntradaProducto[]>(API_URL);
};

export const guardarEntrada = (entrada: Omit<EntradaProducto, 'id'>) => {
  return axios.post<EntradaProducto>(API_URL, entrada);
};
