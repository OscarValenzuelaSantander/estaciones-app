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
    <div>
      <h1>Gestión de Trabajadores</h1>
      <TrabajadorForm setTrabajadores={setTrabajadores} />
      <TrabajadorList trabajadores={trabajadores} />
    </div>
  );
};

export default TrabajadoresPage;
