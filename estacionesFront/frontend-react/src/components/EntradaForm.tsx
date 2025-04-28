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
        producto: { id: Number(productoId) },
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
    <div className="container mt-4">
      <div className="card p-4 shadow-sm">
       

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">ID Producto:</label>
            <input
              type="text"
              className="form-control"
              value={productoId}
              onChange={e => setProductoId(e.target.value)}
              required
              placeholder="Ingrese el ID del producto"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Cantidad:</label>
            <input
              type="number"
              className="form-control"
              value={cantidad}
              onChange={e => setCantidad(Number(e.target.value))}
              required
              min="1"
              placeholder="Ingrese la cantidad"
            />
          </div>

          <button type="submit" className="btn btn-success w-100">
            Guardar Entrada
          </button>
        </form>
      </div>
    </div>
  );
};

export default EntradaForm;
