import React, { useEffect, useState } from 'react';
import { guardarMerma } from '../services/mermaService';
import { obtenerProductos } from '../services/productoService';
import { Merma } from '../types/Merma';
import { Producto } from '../types/Producto';

type Props = {
  setMermas: React.Dispatch<React.SetStateAction<Merma[]>>;
};

const MermaForm: React.FC<Props> = ({ setMermas }) => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [productoId, setProductoId] = useState('');
  const [cantidad, setCantidad] = useState(0);
  const [motivo, setMotivo] = useState('');

  useEffect(() => {
    obtenerProductos().then(res => setProductos(res.data));
  }, []);

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

      // 🔵 Buscar el producto completo a partir del ID
      const productoCompleto = productos.find(p => p.id === Number(productoId));

      // 🔵 Crear una nueva merma completa incluyendo el nombre del producto
      const nuevaMermaCompleta: Merma = {
        ...res.data,
        producto: productoCompleto || { id: Number(productoId), nombre: 'Producto desconocido', categoria: '', stock: 0, unidadMedida: '' }
      };

      setMermas(prev => [...prev, nuevaMermaCompleta]);
      alert('Merma registrada con éxito');

      // Limpiar campos
      setProductoId('');
      setCantidad(0);
      setMotivo('');
    } catch (error) {
      console.error('Error al guardar merma:', error);
      alert('Error al guardar merma');
    }
  };

  return (
    <div className="card p-4 shadow-sm">
      <h2 className="text-center mb-4">Registrar Merma</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Producto:</label>
          <select
            className="form-select"
            value={productoId}
            onChange={e => setProductoId(e.target.value)}
            required
          >
            <option value="">Seleccione un producto</option>
            {productos.map(p => (
              <option key={p.id} value={p.id}>
                {p.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Cantidad:</label>
          <input
            type="number"
            className="form-control"
            value={cantidad}
            onChange={e => setCantidad(Number(e.target.value))}
            required
            min={1}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Motivo:</label>
          <input
            type="text"
            className="form-control"
            value={motivo}
            onChange={e => setMotivo(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Guardar Merma
        </button>
      </form>
    </div>
  );
};

export default MermaForm;
