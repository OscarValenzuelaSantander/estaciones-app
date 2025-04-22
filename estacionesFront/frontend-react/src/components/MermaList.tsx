import React from 'react';
import { Merma } from '../types/Merma';

type Props = {
  mermas: Merma[];
};

const MermaList: React.FC<Props> = ({ mermas }) => {
  return (
    <div>
      <h2>Listado de Mermas</h2>
      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Motivo</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {mermas.map(m => (
            <tr key={m.id}>
              <td>{m.id}</td>
              <td>{m.producto?.nombre || 'N/D'}</td>
              <td>{m.cantidad}</td>
              <td>{m.motivo}</td>
              <td>{new Date(m.fecha).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MermaList;
