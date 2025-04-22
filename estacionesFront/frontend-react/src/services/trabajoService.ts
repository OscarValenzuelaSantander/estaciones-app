import axios from 'axios';

const API_URL = 'http://localhost:8080/api/trabajos';

export const guardarTrabajo = (trabajo: { tipoTrabajo: string; fechaTrabajo: string }) =>
  axios.post(API_URL, trabajo);

export const obtenerTrabajos = () => axios.get(API_URL);
