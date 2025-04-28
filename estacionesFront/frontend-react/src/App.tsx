import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom'; // Ojo: ahora usamos NavLink
import ProductosPage from './pages/ProductosPage';
import TrabajadoresPage from './pages/TrabajadoresPage';
//import EntradasPage from './pages/EntradasPage';
import MermasPage from './pages/MermasPage';
import EstacionPage from './pages/EstacionPage';
import TrabajoPage from './pages/TrabajoPage';
import AsignacionTrabajoPage from './pages/AsignacionTrabajoPage';
import AsignacionTrabajoFormPage from './pages/AsignacionTrabajoFormPage';
import AsignacionTrabajoInformePage from './pages/AsignacionTrabajoInformePage';
import './App.css';


const App: React.FC = () => {
  return (
    <Router>
      <nav className="nav-bar">
        <NavLink to="/productos" className="nav-link">Productos</NavLink>
        <NavLink to="/trabajadores" className="nav-link">Trabajadores</NavLink>
        
        <NavLink to="/mermas" className="nav-link">Mermas</NavLink>
        <NavLink to="/estaciones" className="nav-link">Estaciones</NavLink>
        <NavLink to="/trabajos" className="nav-link">Trabajos</NavLink>
        <NavLink to="/crear-asignacion" className="nav-link">Crear Asignación</NavLink>
        <NavLink to="/asignaciones-trabajo" className="nav-link">Asignaciones</NavLink>
        <NavLink to="/informe-trabajador" className="nav-link">Informe Trabajador</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/productos" />} />
        <Route path="/productos" element={<ProductosPage />} />
        <Route path="/trabajadores" element={<TrabajadoresPage />} />
        
        <Route path="/mermas" element={<MermasPage />} />
        <Route path="/estaciones" element={<EstacionPage />} />
        <Route path="/trabajos" element={<TrabajoPage />} />
        <Route path="/asignaciones-trabajo" element={<AsignacionTrabajoPage />} />
        <Route path="/crear-asignacion" element={<AsignacionTrabajoFormPage />} />
        <Route path="/informe-trabajador" element={<AsignacionTrabajoInformePage />} />
      </Routes>
    </Router>
  );
};

export default App;
