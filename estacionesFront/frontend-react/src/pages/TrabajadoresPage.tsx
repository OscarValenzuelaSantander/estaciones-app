import React, { useEffect, useState } from 'react';
import { Trabajador } from '../types/Trabajador';
import { obtenerTrabajadores } from '../services/trabajadorService';
import TrabajadorForm from '../components/TrabajadorForm';
import TrabajadorList from '../components/TrabajadorList';

const TrabajadoresPage: React.FC = () => {
  const [trabajadores, setTrabajadores] = useState<Trabajador[]>([]);

  useEffect(() => {
    obtenerTrabajadores().then((res: { data: Trabajador[] }) => {
      setTrabajadores(res.data);
    });
  }, []);

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-sm mb-4">
        <h2 className="text-center mb-4">Agregar Nuevo Trabajador</h2>
        <TrabajadorForm setTrabajadores={setTrabajadores} />
      </div>

      <div className="card p-4 shadow-sm">
        <h2 className="text-center mb-4">Listado de Trabajadores</h2>
        <TrabajadorList trabajadores={trabajadores} />
      </div>
    </div>
  );
};

export default TrabajadoresPage;
