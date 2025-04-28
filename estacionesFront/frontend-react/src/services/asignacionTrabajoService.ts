import axios from 'axios';

const API_URL = 'http://localhost:8080/api/asignaciones-trabajo';

export const crearAsignacionTrabajo = (asignacion: any) => {
  return axios.post(API_URL, asignacion);
};

export const obtenerAsignacionesTrabajo = () => {
  return axios.get(API_URL);
};

export const obtenerAsignacionTrabajoPorId = (id: number) => {
  return axios.get(`${API_URL}/${id}`);
};

export const obtenerAsignacionesPorTrabajador = (trabajadorId: number) => {
  return axios.get(`${API_URL}/trabajador/${trabajadorId}`);
};
