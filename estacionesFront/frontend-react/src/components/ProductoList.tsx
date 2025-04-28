import React from 'react';
import { Producto } from '../types/Producto';

type Props = {
  productos: Producto[];
};

const ProductoList: React.FC<Props> = ({ productos }) => {
  return (
    <div className="container mt-4">
      <div className="card p-4 shadow-sm">
        

        <div className="table-responsive">
          <table className="table table-striped table-hover table-bordered rounded shadow-sm">
            <thead className="table-primary">
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
      </div>
    </div>
  );
};

export default ProductoList;
