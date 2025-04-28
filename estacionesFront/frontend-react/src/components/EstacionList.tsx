import React, { useEffect, useState } from 'react';
import { obtenerEstaciones } from '../services/estacionService';

interface Estacion {
  id: number;
  nombre: string;
  ubicacion: string;
}

const EstacionList = ({ recargar }: { recargar: boolean }) => {
  const [estaciones, setEstaciones] = useState<Estacion[]>([]);

  useEffect(() => {
    obtenerEstaciones()
      .then((res) => setEstaciones(res.data))
      .catch((err) => console.error('Error al cargar estaciones', err));
  }, [recargar]);

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow-sm">
        

        {estaciones.length > 0 ? (
          <ul className="list-group">
            {estaciones.map((e) => (
              <li key={e.id} className="list-group-item d-flex justify-content-between align-items-center">
                <span>
                  <strong>{e.nombre}</strong>
                </span>
                <span className="text-muted">{e.ubicacion}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-muted">No hay estaciones registradas.</p>
        )}
      </div>
    </div>
  );
};

export default EstacionList;
