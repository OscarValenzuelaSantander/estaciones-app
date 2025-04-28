import React, { useState } from 'react';
import { guardarTrabajador } from '../services/trabajadorService';
import { Trabajador } from '../types/Trabajador';

type Props = {
  setTrabajadores: React.Dispatch<React.SetStateAction<Trabajador[]>>;
};

const TrabajadorForm: React.FC<Props> = ({ setTrabajadores }) => {
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [rut, setRut] = useState('');
  const [cargo, setCargo] = useState('');
  const [area, setArea] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await guardarTrabajador({ nombreCompleto, rut, cargo, area });
      setTrabajadores(prev => [...prev, res.data]);
      alert('Trabajador guardado con éxito');
      setNombreCompleto('');
      setRut('');
      setCargo('');
      setArea('');
    } catch (err) {
      console.error('Error al guardar trabajador:', err);
      alert('Error al guardar trabajador');
    }
  };

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow-sm">
       

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nombre completo:</label>
            <input
              type="text"
              className="form-control"
              value={nombreCompleto}
              onChange={e => setNombreCompleto(e.target.value)}
              required
              placeholder="Ingrese el nombre completo"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">RUT:</label>
            <input
              type="text"
              className="form-control"
              value={rut}
              onChange={e => setRut(e.target.value)}
              required
              placeholder="Ingrese el RUT del trabajador"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Cargo:</label>
            <input
              type="text"
              className="form-control"
              value={cargo}
              onChange={e => setCargo(e.target.value)}
              required
              placeholder="Ej: Capataz, Supervisor, Técnico, etc."
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Área:</label>
            <input
              type="text"
              className="form-control"
              value={area}
              onChange={e => setArea(e.target.value)}
              required
              placeholder="Ej: Planta Externa, Instalaciones, etc."
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Guardar Trabajador
          </button>
        </form>
      </div>
    </div>
  );
};

export default TrabajadorForm;
