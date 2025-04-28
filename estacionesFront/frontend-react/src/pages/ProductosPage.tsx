import React, { useEffect, useState } from 'react';
import { Producto } from '../types/Producto';
import { obtenerProductos } from '../services/productoService';
import ProductoForm from '../components/ProductoForm';
import ProductoList from '../components/ProductoList';

const ProductosPage: React.FC = () => {
  const [productos, setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    obtenerProductos().then(res => setProductos(res.data));
  }, []);

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-sm mb-4">
        <h2 className="text-center mb-4">Agregar Nuevo Producto</h2>
        <ProductoForm setProductos={setProductos} />
      </div>

      <div className="card p-4 shadow-sm">
        <h2 className="text-center mb-4">Listado de Productos</h2>
        <ProductoList productos={productos} />
      </div>
    </div>
  );
};

export default ProductosPage;
