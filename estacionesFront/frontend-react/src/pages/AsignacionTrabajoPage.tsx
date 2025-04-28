import React from 'react';
import AsignacionTrabajoList from '../components/AsignacionTrabajoList';

const AsignacionTrabajoPage = () => {
  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-sm">
        <h2 className="text-center mb-4">Asignaciones de Trabajo</h2>
        <AsignacionTrabajoList />
      </div>
    </div>
  );
};

export default AsignacionTrabajoPage;
