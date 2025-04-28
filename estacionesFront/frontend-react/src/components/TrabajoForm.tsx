import React, { useState } from 'react';
import { guardarTrabajo } from '../services/trabajoService';

const TrabajoForm = ({ onGuardar }: { onGuardar: () => void }) => {
  const [tipoTrabajo, setTipoTrabajo] = useState('');
  const [fechaTrabajo, setFechaTrabajo] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await guardarTrabajo({ tipoTrabajo, fechaTrabajo });
      setTipoTrabajo('');
      setFechaTrabajo('');
      onGuardar();
    } catch (error) {
      console.error('Error al guardar trabajo', error);
    }
  };

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow-sm">
        

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Tipo de Trabajo:</label>
            <input
              type="text"
              className="form-control"
              value={tipoTrabajo}
              onChange={(e) => setTipoTrabajo(e.target.value)}
              required
              placeholder="Ej: Instalación de FO, Mantenimiento, etc."
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Fecha del Trabajo:</label>
            <input
              type="date"
              className="form-control"
              value={fechaTrabajo}
              onChange={(e) => setFechaTrabajo(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-success w-100">
            Guardar Trabajo
          </button>
        </form>
      </div>
    </div>
  );
};

export default TrabajoForm;
