import React, { useEffect, useState } from 'react';
import { EntradaProducto } from '../types/EntradaProducto';
import { obtenerEntradas } from '../services/entradaService';
import EntradaForm from '../components/EntradaForm';
import EntradaList from '../components/EntradaList';

const EntradasPage: React.FC = () => {
  const [entradas, setEntradas] = useState<EntradaProducto[]>([]);

  useEffect(() => {
    obtenerEntradas().then(res => setEntradas(res.data));
  }, []);

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-sm mb-4">
        <h2 className="text-center mb-4">Registrar Producto</h2>
        <EntradaForm setEntradas={setEntradas} />
      </div>

      <div className="card p-4 shadow-sm">
        <h2 className="text-center mb-4">Listado de Productos</h2>
        <EntradaList entradas={entradas} />
      </div>
    </div>
  );
};

export default EntradasPage;
