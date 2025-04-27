import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { obtenerTrabajos } from '../services/trabajoService';
import { obtenerTrabajadores } from '../services/trabajadorService';
import { obtenerProductos } from '../services/productoService';
import { obtenerEstaciones } from '../services/estacionService';

interface Trabajo {
  id: number;
  tipoTrabajo: string;
  fechaTrabajo: string;
}

interface Trabajador {
  id: number;
  nombreCompleto: string;
  rut: string;
  cargo: string;
  area: string;
}

interface Producto {
  id: number;
  nombre: string;
}

interface Estacion {
  id: number;
  nombre: string;
}

const AsignacionTrabajoForm = () => {
  const [trabajos, setTrabajos] = useState<Trabajo[]>([]);
  const [trabajadores, setTrabajadores] = useState<Trabajador[]>([]);
  const [productos, setProductos] = useState<Producto[]>([]);
  const [estaciones, setEstaciones] = useState<Estacion[]>([]);

  const [trabajoId, setTrabajoId] = useState<number | null>(null);
  const [trabajadorId, setTrabajadorId] = useState<number | null>(null);
  const [productoId, setProductoId] = useState<number | null>(null);
  const [estacionId, setEstacionId] = useState<number | null>(null);
  const [fechaAsignacion, setFechaAsignacion] = useState('');

  useEffect(() => {
    obtenerTrabajos().then(res => setTrabajos(res.data));
    obtenerTrabajadores().then(res => setTrabajadores(res.data));
    obtenerProductos().then(res => setProductos(res.data));
    obtenerEstaciones().then(res => setEstaciones(res.data));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (trabajoId === null || trabajadorId === null || productoId === null || estacionId === null || !fechaAsignacion) {
      alert('Completa todos los campos');
      return;
    }

    const nuevaAsignacion = {
      trabajo: { id: trabajoId },
      trabajador: { id: trabajadorId },
      producto: { id: productoId },
      estacion: { id: estacionId },
      fechaAsignacion: fechaAsignacion
    };

    try {
      await axios.post('http://localhost:8080/api/asignaciones-trabajo', nuevaAsignacion);
      alert('Asignación creada correctamente');
      // Limpieza de campos
      setTrabajoId(null);
      setTrabajadorId(null);
      setProductoId(null);
      setEstacionId(null);
      setFechaAsignacion('');
    } catch (error) {
      console.error('Error al crear asignación', error);
    }
  };

  return (
    <div>
      <h4>Crear nueva Asignación de Trabajo</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Trabajo:</label>
          <select className="form-select" value={trabajoId ?? ''} onChange={e => setTrabajoId(Number(e.target.value))} required>
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
          <select className="form-select" value={trabajadorId ?? ''} onChange={e => setTrabajadorId(Number(e.target.value))} required>
            <option value="">Seleccione un trabajador</option>
            {trabajadores.map(t => (
              <option key={t.id} value={t.id}>{t.nombreCompleto}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label>Producto:</label>
          <select className="form-select" value={productoId ?? ''} onChange={e => setProductoId(Number(e.target.value))} required>
            <option value="">Seleccione un producto</option>
            {productos.map(p => (
              <option key={p.id} value={p.id}>{p.nombre}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label>Estación:</label>
          <select className="form-select" value={estacionId ?? ''} onChange={e => setEstacionId(Number(e.target.value))} required>
            <option value="">Seleccione una estación</option>
            {estaciones.map(e => (
              <option key={e.id} value={e.id}>{e.nombre}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label>Fecha de Asignación:</label>
          <input
            type="date"
            className="form-control"
            value={fechaAsignacion}
            onChange={e => setFechaAsignacion(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Crear Asignación
        </button>
      </form>
    </div>
  );
};

export default AsignacionTrabajoForm;
