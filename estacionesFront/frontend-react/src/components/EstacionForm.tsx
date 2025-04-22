import React, { useState } from 'react';
import { guardarEstacion } from '../services/estacionService';

const EstacionForm = ({ onAgregar }: { onAgregar: () => void }) => {
  const [nombre, setNombre] = useState('');
  const [ubicacion, setUbicacion] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await guardarEstacion({ nombre, ubicacion });
      setNombre('');
      setUbicacion('');
      onAgregar();
    } catch (error) {
      console.error('Error al guardar estación', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Agregar Estación</h4>
      <div className="mb-3">
        <label className="form-label">Nombre:</label>
        <input
          type="text"
          className="form-control"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Ubicación:</label>
        <input
          type="text"
          className="form-control"
          value={ubicacion}
          onChange={(e) => setUbicacion(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Guardar</button>
    </form>
  );
};

export default EstacionForm;
