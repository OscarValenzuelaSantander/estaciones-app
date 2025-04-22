import axios from 'axios';

const API_URL = 'http://localhost:8080/api/estaciones';

export const obtenerEstaciones = () => axios.get(API_URL);

export const guardarEstacion = (estacion: { nombre: string; ubicacion: string }) =>
  axios.post(API_URL, estacion);
