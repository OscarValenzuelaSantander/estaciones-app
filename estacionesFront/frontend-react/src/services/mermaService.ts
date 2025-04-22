import axios from 'axios';
import { Merma } from '../types/Merma';

const API_URL = 'http://localhost:8080/api/mermas';

export const obtenerMermas = () => {
  return axios.get<Merma[]>(API_URL);
};

export const guardarMerma = (merma: Omit<Merma, 'id'>) => {
  return axios.post<Merma>(API_URL, merma);
};
