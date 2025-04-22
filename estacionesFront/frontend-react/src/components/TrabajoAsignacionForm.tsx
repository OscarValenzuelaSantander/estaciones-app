import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Trabajo {
  id: number;
  tipoTrabajo: string;
  fechaTrabajo: string;
}

interface Trabajador {
  id: number;
  nombre: string;
}

interface Producto {
  id: number;
  nombre: string;
}

interface Estacion {
  id: number;
  nombre: string;
}

const TrabajoAsignacionForm = () => {
  const [trabajos, setTrabajos] = useState<Trabajo[]>([]);
  const [trabajadores, setTrabajadores] = useState<Trabajador[]>([]);
  const [productos, setProductos] = useState<Producto[]>([]);
  const [estaciones, setEstaciones] = useState<Estacion[]>([]);

  const [trabajoId, setTrabajoId] = useState('');
  const [trabajadorId, setTrabajadorId] = useState('');
  const [productoId, setProductoId] = useState('');
  const [estacionId, setEstacionId] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/api/trabajos').then(res => setTrabajos(res.data));
    axios.get('http://localhost:8080/api/trabajadores').then(res => setTrabajadores(res.data));
    axios.get('http://localhost:8080/api/productos').then(res => setProductos(res.data));
    axios.get('http://localhost:8080/api/estaciones').then(res => setEstaciones(res.data));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/trabajos/${trabajoId}`, {
        trabajador: { id: trabajadorId },
        producto: { id: productoId },
        estacion: { id: estacionId }
      });
      alert('Trabajo actualizado correctamente');
      setTrabajoId('');
      setTrabajadorId('');
      setProductoId('');
      setEstacionId('');
    } catch (error) {
      console.error('Error al asignar datos al trabajo', error);
    }
  };

  return (
    <div>
      <h4>Asignar datos a Trabajo</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Trabajo:</label>
          <select className="form-select" value={trabajoId} onChange={e => setTrabajoId(e.target.value)} required>
            <option value="">Seleccione un trabajo</option>
            {trabajos.map(t => (
              <option key={t.id} value={t.id}>
                {t.tipoTrabajo} - {t.fechaTrabajo}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label>Trabajador:</label>
          <select className="form-select" value={trabajadorId} onChange={e => setTrabajadorId(e.target.value)} required>
            <option value="">Seleccione un trabajador</option>
            {trabajadores.map(t => (
              <option key={t.id} value={t.id}>{t.nombre}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label>Producto:</label>
          <select className="form-select" value={productoId} onChange={e => setProductoId(e.target.value)} required>
            <option value="">Seleccione un producto</option>
            {productos.map(p => (
              <option key={p.id} value={p.id}>{p.nombre}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label>Estación:</label>
          <select className="form-select" value={estacionId} onChange={e => setEstacionId(e.target.value)} required>
            <option value="">Seleccione una estación</option>
            {estaciones.map(e => (
              <option key={e.id} value={e.id}>{e.nombre}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-success">Asignar</button>
      </form>
    </div>
  );
};

export default TrabajoAsignacionForm;
