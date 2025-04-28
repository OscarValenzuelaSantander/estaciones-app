import React, { useEffect, useState } from 'react';
import { Merma } from '../types/Merma';
import { obtenerMermas } from '../services/mermaService';
import MermaForm from '../components/MermaForm';
import MermaList from '../components/MermaList';

const MermasPage: React.FC = () => {
  const [mermas, setMermas] = useState<Merma[]>([]);

  useEffect(() => {
    obtenerMermas().then(res => setMermas(res.data));
  }, []);

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-sm mb-4">
        <h2 className="text-center mb-4">Registrar Nueva Merma</h2>
        <MermaForm setMermas={setMermas} />
      </div>

      <div className="card p-4 shadow-sm">
        <h2 className="text-center mb-4">Listado de Mermas</h2>
        <MermaList mermas={mermas} />
      </div>
    </div>
  );
};

export default MermasPage;
