import React, { useState } from 'react';
import TrabajoForm from '../components/TrabajoForm';
import TrabajoList from '../components/TrabajoList';

const TrabajoPage = () => {
  const [recargar, setRecargar] = useState(false);

  const actualizarLista = () => setRecargar(!recargar);

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-sm mb-4">
        <h2 className="text-center mb-4">Crear Nuevo Trabajo</h2>
        <TrabajoForm onGuardar={actualizarLista} />
      </div>

      <div className="card p-4 shadow-sm">
        <h2 className="text-center mb-4">Listado de Trabajos</h2>
        <TrabajoList recargar={recargar} />
      </div>
    </div>
  );
};

export default TrabajoPage;
