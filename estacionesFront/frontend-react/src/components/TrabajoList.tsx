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
    <div>
      <h4>Lista de Trabajos</h4>
      <ul className="list-group">
        {trabajos.map((t) => (
          <li key={t.id} className="list-group-item">
            <strong>{t.tipoTrabajo}</strong> - {t.fechaTrabajo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrabajoList;
