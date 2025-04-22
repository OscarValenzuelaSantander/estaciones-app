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
    <div>
      <h1>Gestión de Entradas</h1>
      <EntradaForm setEntradas={setEntradas} />
      <EntradaList entradas={entradas} />
    </div>
  );
};

export default EntradasPage;
