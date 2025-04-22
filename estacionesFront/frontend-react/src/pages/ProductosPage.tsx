import React, { useEffect, useState } from 'react';
import { Producto } from '../types/Producto';
import { obtenerProductos } from '../services/productoService';
import ProductoForm from '../components/ProductoForm';
import ProductoList from '../components/ProductoList';

// 👇 Primero defines el componente
const ProductosPage: React.FC = () => {
  const [productos, setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    obtenerProductos().then(res => setProductos(res.data));
  }, []);

  return (
    <div>
      <h1>Gestión de Productos</h1>
      <ProductoForm setProductos={setProductos} />
      <ProductoList productos={productos} />
    </div>
  );
};

// 👇 Luego lo exportas como default
export default ProductosPage;
