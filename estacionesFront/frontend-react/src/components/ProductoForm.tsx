import React, { useState } from 'react';
import { guardarProducto } from '../services/productoService';
import { Producto } from '../types/Producto';

type Props = {
  setProductos: React.Dispatch<React.SetStateAction<Producto[]>>;
};

const ProductoForm: React.FC<Props> = ({ setProductos }) => {
  const [nombre, setNombre] = useState('');
  const [categoria, setCategoria] = useState('');
  const [stock, setStock] = useState(0);
  const [unidadMedida, setUnidadMedida] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await guardarProducto({ nombre, categoria, stock, unidadMedida });

      setProductos(prev => [...prev, response.data]);

      alert('Producto guardado con éxito');
      setNombre('');
      setCategoria('');
      setStock(0);
      setUnidadMedida('');
    } catch (error) {
      console.error('Error al guardar producto:', error);
      alert('Error al guardar el producto');
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
              placeholder="Ingrese el nombre del producto"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Categoría:</label>
            <input
              type="text"
              className="form-control"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              required
              placeholder="Ingrese la categoría"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Stock:</label>
            <input
              type="number"
              className="form-control"
              value={stock}
              onChange={(e) => setStock(Number(e.target.value))}
              required
              min="0"
              placeholder="Ingrese el stock inicial"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Unidad de medida:</label>
            <input
              type="text"
              className="form-control"
              value={unidadMedida}
              onChange={(e) => setUnidadMedida(e.target.value)}
              required
              placeholder="Ej: Unidad, Litro, Metro, etc."
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Guardar Producto
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductoForm;
