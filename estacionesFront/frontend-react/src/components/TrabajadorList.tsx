import React from 'react';
import { Trabajador } from '../types/Trabajador';

type Props = {
  trabajadores: Trabajador[];
};

const TrabajadorList: React.FC<Props> = ({ trabajadores }) => {
  return (
    <div>
      <h2>Lista de Trabajadores</h2>
      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>RUT</th>
            <th>Cargo</th>
            <th>Área</th>
          </tr>
        </thead>
        <tbody>
          {trabajadores.map(t => (
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
  );
};

export default TrabajadorList;
