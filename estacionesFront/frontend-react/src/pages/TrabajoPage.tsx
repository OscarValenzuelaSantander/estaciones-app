import React, { useState } from 'react';
import TrabajoForm from '../components/TrabajoForm';
import TrabajoList from '../components/TrabajoList';

const TrabajoPage = () => {
  const [recargar, setRecargar] = useState(false);

  const actualizarLista = () => setRecargar(!recargar);

  return (
    <div className="container mt-4">
      <h2>Gestión de Trabajos</h2>
      <TrabajoForm onGuardar={actualizarLista} />
      <hr />
      <TrabajoList recargar={recargar} />
    </div>
  );
};

export default TrabajoPage;
