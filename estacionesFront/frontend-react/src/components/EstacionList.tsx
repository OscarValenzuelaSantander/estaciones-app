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
    <div>
      <h4>Lista de Estaciones</h4>
      <ul className="list-group">
        {estaciones.map((e) => (
          <li key={e.id} className="list-group-item">
            <strong>{e.nombre}</strong> - {e.ubicacion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EstacionList;
