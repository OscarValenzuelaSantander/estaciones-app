import React from 'react';
import { Trabajador } from '../types/Trabajador';

type Props = {
  trabajadores: Trabajador[];
};

const TrabajadorList: React.FC<Props> = ({ trabajadores }) => {
  return (
    <div className="container mt-4">
      <div className="card p-4 shadow-sm">
       

        <div className="table-responsive">
          <table className="table table-striped table-hover table-bordered rounded shadow-sm">
            <thead className="table-info">
              <tr>
                <th>ID</th>
                <th>Nombre Completo</th>
                <th>RUT</th>
                <th>Cargo</th>
                <th>Área</th>
              </tr>
            </thead>
            <tbody>
              {trabajadores.map((t) => (
                <tr key={t.id}>
                  <td>{t.id}</td>
                  <td>{t.nombreCompleto}</td>
                  <td>{t.rut}</td>
                  <td>{t.cargo}</td>
                  <td>{t.area}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TrabajadorList;
