import React, { useState } from 'react';
import EstacionForm from '../components/EstacionForm';
import EstacionList from '../components/EstacionList';

const EstacionPage = () => {
  const [recargar, setRecargar] = useState(false);

  const actualizarLista = () => setRecargar(!recargar);

  return (
    <div className="container mt-4">
      <h2>Gestión de Estaciones</h2>
      <EstacionForm onAgregar={actualizarLista} />
      <hr />
      <EstacionList recargar={recargar} />
    </div>
  );
};

export default EstacionPage;
