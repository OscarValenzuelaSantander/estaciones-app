import React from 'react';
import AsignacionTrabajoForm from '../components/AsignacionTrabajoForm';

const AsignacionTrabajoFormPage = () => {
  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-sm">
        <h2 className="text-center mb-4">Crear Nueva Asignación de Trabajo</h2>
        <AsignacionTrabajoForm />
      </div>
    </div>
  );
};

export default AsignacionTrabajoFormPage;
