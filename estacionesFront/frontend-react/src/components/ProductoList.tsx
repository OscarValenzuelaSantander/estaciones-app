import React from 'react';
import { Producto } from '../types/Producto';

type Props = {
  productos: Producto[];
};

const ProductoList: React.FC<Props> = ({ productos }) => {
  return (
    <div>
      <h2>Lista de Productos</h2>
      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Stock</th>
            <th>Unidad</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.nombre}</td>
              <td>{p.categoria}</td>
              <td>{p.stock}</td>
              <td>{p.unidadMedida}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductoList;
