import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import ProductosPage from './pages/ProductosPage';
import TrabajadoresPage from './pages/TrabajadoresPage';
import EntradasPage from './pages/EntradasPage';
import MermasPage from './pages/MermasPage';
import EstacionPage from './pages/EstacionPage';
import TrabajoPage from './pages/TrabajoPage';


import AsignacionTrabajoPage from './pages/AsignacionTrabajoPage';
import AsignacionTrabajoFormPage from './pages/AsignacionTrabajoFormPage';

const App: React.FC = () => {
  return (
    <Router>
      <nav style={{ padding: '10px', display: 'flex', gap: '10px' }}>
        <Link to="/productos">Productos</Link>
        <Link to="/trabajadores">Trabajadores</Link>
        <Link to="/entradas">Entradas</Link>
        <Link to="/mermas">Mermas</Link>
        <Link to="/estaciones">Estaciones</Link>
        <Link to="/trabajos">Trabajos</Link>
        

        <Link to="/crear-asignacion">Crear Asignacion</Link>
        <Link to="/asignaciones-trabajo">Asignaciones de trabajos</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/productos" />} />
        <Route path="/productos" element={<ProductosPage />} />
        <Route path="/trabajadores" element={<TrabajadoresPage />} />
        <Route path="/entradas" element={<EntradasPage />} />
        <Route path="/mermas" element={<MermasPage />} />
        <Route path="/estaciones" element={<EstacionPage />} />
        <Route path="/trabajos" element={<TrabajoPage />} />
        
        
        <Route path="/asignaciones-trabajo" element={<AsignacionTrabajoPage />} />
        <Route path="/crear-asignacion" element={<AsignacionTrabajoFormPage />} />



      </Routes>
    </Router>
  );
};

export default App;
