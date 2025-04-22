import React, { useState } from 'react';
import { guardarMerma } from '../services/mermaService';
import { Merma } from '../types/Merma';

type Props = {
  setMermas: React.Dispatch<React.SetStateAction<Merma[]>>;
};

const MermaForm: React.FC<Props> = ({ setMermas }) => {
  const [productoId, setProductoId] = useState('');
  const [cantidad, setCantidad] = useState(0);
  const [motivo, setMotivo] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const nuevaMerma = {
        producto: { id: Number(productoId) },
        cantidad,
        motivo,
        fecha: new Date().toISOString()
      };

      const res = await guardarMerma(nuevaMerma);
      setMermas(prev => [...prev, res.data]);
      alert('Merma registrada con éxito');
      setProductoId('');
      setCantidad(0);
      setMotivo('');
    } catch (error) {
      console.error('Error al guardar merma:', error);
      alert('Error al guardar merma');
    }
  };

  return (
    <div>
      <h2>Registrar Merma</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID Producto:</label>
          <input value={productoId} onChange={e => setProductoId(e.target.value)} required />
        </div>
        <div>
          <label>Cantidad:</label>
          <input type="number" value={cantidad} onChange={e => setCantidad(Number(e.target.value))} required />
        </div>
        <div>
          <label>Motivo:</label>
          <input value={motivo} onChange={e => setMotivo(e.target.value)} required />
        </div>
        <button type="submit">Guardar Merma</button>
      </form>
    </div>
  );
};

export default MermaForm;
