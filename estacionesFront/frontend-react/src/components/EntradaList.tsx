import React from 'react';
import { EntradaProducto } from '../types/EntradaProducto';

type Props = {
  entradas: EntradaProducto[];
};

const EntradaList: React.FC<Props> = ({ entradas }) => {
  return (
    <div className="container mt-4">
      <div className="card p-4 shadow-sm">
       

        <div className="table-responsive">
          <table className="table table-striped table-hover table-bordered rounded shadow-sm">
            <thead className="table-success">
              <tr>
                <th>ID</th>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody>
              {entradas.map((e) => (
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
      </div>
    </div>
  );
};

export default EntradaList;
