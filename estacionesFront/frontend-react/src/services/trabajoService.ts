import axios from 'axios';

const API_URL = 'http://localhost:8080/api/trabajos';

export const guardarTrabajo = (trabajo: { tipoTrabajo: string; fechaTrabajo: string }) =>
  axios.post(API_URL, trabajo);

export const obtenerTrabajos = () => axios.get(API_URL);

export const asignarDetallesTrabajo = (
  id: number,
  datos: {
    trabajador: { id: number };
    producto: { id: number };
    estacion: { id: number };
  }
) => axios.put(`http://localhost:8080/api/trabajos/${id}`, datos);

