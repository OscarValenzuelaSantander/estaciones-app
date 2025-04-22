import React, { useState } from 'react';
import { guardarEntrada } from '../services/entradaService';
import { EntradaProducto } from '../types/EntradaProducto';

type Props = {
  setEntradas: React.Dispatch<React.SetStateAction<EntradaProducto[]>>;
};

const EntradaForm: React.FC<Props> = ({ setEntradas }) => {
  const [productoId, setProductoId] = useState('');
  const [cantidad, setCantidad] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const nuevaEntrada = {
        producto: { id: Number(productoId) }, // suponiendo que backend lo acepta así
        cantidad,
        fecha: new Date().toISOString()
      };

      const res = await guardarEntrada(nuevaEntrada);
      setEntradas(prev => [...prev, res.data]);
      alert('Entrada registrada con éxito');
      setProductoId('');
      setCantidad(0);
    } catch (error) {
      console.error('Error al guardar entrada:', error);
      alert('Error al guardar entrada');
    }
  };

  return (
    <div>
      <h2>Registrar Entrada</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID Producto:</label>
          <input value={productoId} onChange={e => setProductoId(e.target.value)} required />
        </div>
        <div>
          <label>Cantidad:</label>
          <input type="number" value={cantidad} onChange={e => setCantidad(Number(e.target.value))} required />
        </div>
        <button type="submit">Guardar Entrada</button>
      </form>
    </div>
  );
};

export default EntradaForm;
