import React from 'react';
import { Merma } from '../types/Merma';

type Props = {
  mermas: Merma[];
};

const MermaList: React.FC<Props> = ({ mermas }) => {
  return (
    <div className="container mt-4">
      <div className="card p-4 shadow-sm">
        

        <div className="table-responsive">
          <table className="table table-striped table-hover table-bordered rounded shadow-sm">
            <thead className="table-danger">
              <tr>
                <th>ID</th>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Motivo</th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody>
              {mermas.map((m) => (
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
      </div>
    </div>
  );
};

export default MermaList;
