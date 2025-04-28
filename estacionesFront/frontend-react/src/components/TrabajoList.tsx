import React, { useEffect, useState } from 'react';
import { obtenerTrabajos } from '../services/trabajoService';

interface Trabajo {
  id: number;
  tipoTrabajo: string;
  fechaTrabajo: string;
}

const TrabajoList = ({ recargar }: { recargar: boolean }) => {
  const [trabajos, setTrabajos] = useState<Trabajo[]>([]);

  useEffect(() => {
    obtenerTrabajos()
      .then((res) => setTrabajos(res.data))
      .catch((err) => console.error('Error al cargar trabajos', err));
  }, [recargar]);

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow-sm">
        

        {trabajos.length > 0 ? (
          <ul className="list-group">
            {trabajos.map((t) => (
              <li key={t.id} className="list-group-item d-flex justify-content-between align-items-center">
                <strong>{t.tipoTrabajo}</strong>
                <span className="text-muted">{new Date(t.fechaTrabajo).toLocaleDateString()}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-muted">No hay trabajos registrados.</p>
        )}
      </div>
    </div>
  );
};

export default TrabajoList;
