import React from 'react';
import { EntradaProducto } from '../types/EntradaProducto';

type Props = {
  entradas: EntradaProducto[];
};

const EntradaList: React.FC<Props> = ({ entradas }) => {
  return (
    <div>
      <h2>Listado de Entradas</h2>
      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {entradas.map(e => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.producto?.nombre || 'N/D'}</td>
              <td>{e.cantidad}</td>
              <td>{new Date(e.fecha).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EntradaList;
