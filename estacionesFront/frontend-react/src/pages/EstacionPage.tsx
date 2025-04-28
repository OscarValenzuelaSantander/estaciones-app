import React, { useState } from 'react';
import EstacionForm from '../components/EstacionForm';
import EstacionList from '../components/EstacionList';

const EstacionPage = () => {
  const [recargar, setRecargar] = useState(false);

  const actualizarLista = () => setRecargar(!recargar);

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-sm mb-4">
        <h2 className="text-center mb-4">Agregar Nueva Estación</h2>
        <EstacionForm onAgregar={actualizarLista} />
      </div>

      <div className="card p-4 shadow-sm">
        <h2 className="text-center mb-4">Listado de Estaciones</h2>
        <EstacionList recargar={recargar} />
      </div>
    </div>
  );
};

export default EstacionPage;
