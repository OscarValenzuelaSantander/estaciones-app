import React, { useEffect, useState } from 'react';
import { obtenerTrabajadores } from '../services/trabajadorService';
import { obtenerAsignacionesPorTrabajador } from '../services/asignacionTrabajoService';

interface Trabajador {
  id: number;
  nombreCompleto: string;
}

interface AsignacionTrabajo {
  id: number;
  trabajo: {
    id: number;
    tipoTrabajo: string;
    fechaTrabajo: string;
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

const AsignacionTrabajoInforme = () => {
  const [trabajadores, setTrabajadores] = useState<Trabajador[]>([]);
  const [asignaciones, setAsignaciones] = useState<AsignacionTrabajo[]>([]);
  const [trabajadorId, setTrabajadorId] = useState<number | null>(null);

  useEffect(() => {
    obtenerTrabajadores().then((res) => setTrabajadores(res.data));
  }, []);

  const handleTrabajadorChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = Number(e.target.value);
    setTrabajadorId(selectedId);

    if (selectedId) {
      try {
        const res = await obtenerAsignacionesPorTrabajador(selectedId);
        setAsignaciones(res.data);
      } catch (error) {
        console.error('Error al obtener asignaciones', error);
      }
    } else {
      setAsignaciones([]);
    }
  };

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow-sm">
        <h2 className="text-center mb-4">Informe de Trabajos por Trabajador</h2>

        <div className="mb-4">
          <label className="form-label">Seleccionar Trabajador:</label>
          <select className="form-select" value={trabajadorId ?? ''} onChange={handleTrabajadorChange}>
            <option value="">-- Seleccione un trabajador --</option>
            {trabajadores.map((trabajador) => (
              <option key={trabajador.id} value={trabajador.id}>
                {trabajador.nombreCompleto}
              </option>
            ))}
          </select>
        </div>

        {trabajadorId && asignaciones.length > 0 ? (
          <div className="table-responsive">
            <table className="table table-striped table-hover table-bordered rounded shadow-sm">
              <thead className="table-primary">
                <tr>
                  <th>Trabajo</th>
                  <th>Fecha Trabajo</th>
                  <th>Producto</th>
                  <th>Estación</th>
                  <th>Fecha de Asignación</th>
                </tr>
              </thead>
              <tbody>
                {asignaciones.map((asignacion) => (
                  <tr key={asignacion.id}>
                    <td>{asignacion.trabajo?.tipoTrabajo}</td>
                    <td>{asignacion.trabajo?.fechaTrabajo}</td>
                    <td>{asignacion.producto?.nombre}</td>
                    <td>{asignacion.estacion?.nombre}</td>
                    <td>{asignacion.fechaAsignacion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : trabajadorId ? (
          <p className="text-center text-muted">No hay asignaciones para este trabajador.</p>
        ) : null}
      </div>
    </div>
  );
};

export default AsignacionTrabajoInforme;
