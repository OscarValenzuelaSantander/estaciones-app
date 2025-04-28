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
    <div className="container mt-4">
      <div className="card p-4 shadow-sm">
        

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nombre:</label>
            <input
              type="text"
              className="form-control"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
              placeholder="Ingrese el nombre de la estación"
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
              placeholder="Ingrese la ubicación de la estación"
            />
          </div>

          <button type="submit" className="btn btn-success w-100">
            Guardar Estación
          </button>
        </form>
      </div>
    </div>
  );
};

export default EstacionForm;
