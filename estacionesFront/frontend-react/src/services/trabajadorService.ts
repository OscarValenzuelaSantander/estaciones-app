import axios from 'axios';
import { Trabajador } from '../types/Trabajador';

const API_URL = 'http://localhost:8080/api/trabajadores';

export const obtenerTrabajadores = () => {
  return axios.get<Trabajador[]>(API_URL);
};

export const guardarTrabajador = (trabajador: Omit<Trabajador, 'id'>) => {
  return axios.post<Trabajador>(API_URL, trabajador);
};
