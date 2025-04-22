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
    <div>
      <h1>Gestión de Mermas</h1>
      <MermaForm setMermas={setMermas} />
      <MermaList mermas={mermas} />
    </div>
  );
};

export default MermasPage;
