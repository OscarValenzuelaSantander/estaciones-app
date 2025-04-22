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
    <form onSubmit={handleSubmit}>
      <h4>Crear Trabajo</h4>
      <div className="mb-3">
        <label className="form-label">Tipo de Trabajo:</label>
        <input
          type="text"
          className="form-control"
          value={tipoTrabajo}
          onChange={(e) => setTipoTrabajo(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Fecha:</label>
        <input
          type="date"
          className="form-control"
          value={fechaTrabajo}
          onChange={(e) => setFechaTrabajo(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Guardar</button>
    </form>
  );
};

export default TrabajoForm;
