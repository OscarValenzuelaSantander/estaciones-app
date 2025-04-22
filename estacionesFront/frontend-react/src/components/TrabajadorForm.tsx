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
    <div>
      <h2>Agregar Trabajador</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre completo:</label>
          <input value={nombreCompleto} onChange={e => setNombreCompleto(e.target.value)} required />
        </div>
        <div>
          <label>RUT:</label>
          <input value={rut} onChange={e => setRut(e.target.value)} required />
        </div>
        <div>
          <label>Cargo:</label>
          <input value={cargo} onChange={e => setCargo(e.target.value)} required />
        </div>
        <div>
          <label>Área:</label>
          <input value={area} onChange={e => setArea(e.target.value)} required />
        </div>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default TrabajadorForm;
