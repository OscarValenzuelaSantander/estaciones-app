import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface AsignacionTrabajo {
  id: number;
  trabajo: {
    id: number;
    tipoTrabajo: string;
    fechaTrabajo: string;
  };
  trabajador: {
    id: number;
    nombreCompleto: string;
  };
  producto: {
    id: number;
    nombre: string;
  };
  estacion: {
    id: number;
    nombre: string;
  };
  fechaAsignacion: string;
}

const AsignacionTrabajoList = () => {
  const [asignaciones, setAsignaciones] = useState<AsignacionTrabajo[]>([]);

  useEffect(() => {
    cargarAsignaciones();
  }, []);

  const cargarAsignaciones = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/asignaciones-trabajo');
      setAsignaciones(response.data);
    } catch (error) {
      console.error('Error al cargar asignaciones', error);
    }
  };

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow-sm">
        <h2 className="text-center mb-4">Listado de Asignaciones de Trabajo</h2>

        <div className="table-responsive">
          <table className="table table-striped table-hover table-bordered rounded shadow-sm">
            <thead className="table-primary">
              <tr>
                <th>ID</th>
                <th>Trabajo</th>
                <th>Trabajador</th>
                <th>Producto</th>
                <th>Estación</th>
                <th>Fecha de Asignación</th>
              </tr>
            </thead>
            <tbody>
              {asignaciones.map((asignacion) => (
                <tr key={asignacion.id}>
                  <td>{asignacion.id}</td>
                  <td>{asignacion.trabajo?.tipoTrabajo} - {asignacion.trabajo?.fechaTrabajo}</td>
                  <td>{asignacion.trabajador?.nombreCompleto}</td>
                  <td>{asignacion.producto?.nombre}</td>
                  <td>{asignacion.estacion?.nombre}</td>
                  <td>{asignacion.fechaAsignacion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AsignacionTrabajoList;
