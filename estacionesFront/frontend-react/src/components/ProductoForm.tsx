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

      // Agrega el nuevo producto a la lista
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
    <div>
      <h2>Agregar Producto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        </div>
        <div>
          <label>Categoría:</label>
          <input value={categoria} onChange={(e) => setCategoria(e.target.value)} required />
        </div>
        <div>
          <label>Stock:</label>
          <input type="number" value={stock} onChange={(e) => setStock(Number(e.target.value))} required />
        </div>
        <div>
          <label>Unidad de medida:</label>
          <input value={unidadMedida} onChange={(e) => setUnidadMedida(e.target.value)} required />
        </div>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default ProductoForm;
