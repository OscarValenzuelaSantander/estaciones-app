import React, { useEffect, useState } from 'react';
import { obtenerTrabajadores } from '../services/trabajadorService';
import { obtenerAsignacionesPorTrabajador } from '../services/asignacionTrabajoService';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

interface Trabajador {
  id: number;
  nombreCompleto: string;
}

interface AsignacionTrabajo {
  id: number;
  trabajo: {
    id: number;
    tipoTrabajo: string;
    fechaTrabajo: string;
  };
  producto: {
    id: number;
    nombre: string;
  };
  estacion: {
    id: number;
    nombre: string;
  };
  fechaAsignacion: string;
}

const AsignacionTrabajoInforme = () => {
  const [trabajadores, setTrabajadores] = useState<Trabajador[]>([]);
  const [asignaciones, setAsignaciones] = useState<AsignacionTrabajo[]>([]);
  const [trabajadorId, setTrabajadorId] = useState<number | null>(null);
  const [nombreTrabajador, setNombreTrabajador] = useState<string>('');

  useEffect(() => {
    obtenerTrabajadores().then((res) => setTrabajadores(res.data));
  }, []);

  const handleTrabajadorChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = Number(e.target.value);
    setTrabajadorId(selectedId);

    if (selectedId) {
      try {
        const trabajadorSeleccionado = trabajadores.find(t => t.id === selectedId);
        setNombreTrabajador(trabajadorSeleccionado ? trabajadorSeleccionado.nombreCompleto : '');
        
        const res = await obtenerAsignacionesPorTrabajador(selectedId);
        setAsignaciones(res.data);
      } catch (error) {
        console.error('Error al obtener asignaciones', error);
      }
    } else {
      setAsignaciones([]);
      setNombreTrabajador('');
    }
  };

  const generarPDF = () => {
    const doc = new jsPDF();

    // 🔵 Logo y encabezado
    doc.setFontSize(40);
    doc.setTextColor(0, 102, 204);
    doc.text('O', 10, 20);

    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text('Trabajo en Estaciones de Metro', 30, 20);

    doc.setFontSize(12);
    doc.setTextColor(100, 100, 100);
    doc.text(`Informe de trabajos asignados - ${nombreTrabajador}`, 10, 35);

    // 🔵 Tabla de asignaciones
    autoTable(doc, {
      startY: 45,
      head: [['Trabajo', 'Fecha Trabajo', 'Producto', 'Estación', 'Fecha Asignación']],
      body: asignaciones.map((a) => [
        a.trabajo?.tipoTrabajo,
        a.trabajo?.fechaTrabajo,
        a.producto?.nombre,
        a.estacion?.nombre,
        a.fechaAsignacion,
      ]),
      styles: { fontSize: 10, cellPadding: 3 },
      headStyles: { fillColor: [0, 102, 204], textColor: 255, fontStyle: 'bold' },
      alternateRowStyles: { fillColor: [240, 240, 240] },
    });

    doc.save(`informe_trabajos_${nombreTrabajador}.pdf`);
  };

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow-sm">
        <h2 className="text-center mb-4">Informe de Trabajos por Trabajador</h2>

        <div className="mb-3">
          <label className="form-label">Seleccionar Trabajador:</label>
          <select className="form-select" value={trabajadorId ?? ''} onChange={handleTrabajadorChange}>
            <option value="">-- Seleccione un trabajador --</option>
            {trabajadores.map((trabajador) => (
              <option key={trabajador.id} value={trabajador.id}>
                {trabajador.nombreCompleto}
              </option>
            ))}
          </select>
        </div>

        {trabajadorId && asignaciones.length > 0 ? (
          <>
            <div className="mb-3 text-end">
              <button className="btn btn-danger" onClick={generarPDF}>
                Generar PDF
              </button>
            </div>

            <div className="table-responsive">
              <table className="table table-bordered table-hover">
                <thead className="table-dark">
                  <tr>
                    <th>Trabajo</th>
                    <th>Fecha Trabajo</th>
                    <th>Producto</th>
                    <th>Estación</th>
                    <th>Fecha de Asignación</th>
                  </tr>
                </thead>
                <tbody>
                  {asignaciones.map((asignacion) => (
                    <tr key={asignacion.id}>
                      <td>{asignacion.trabajo?.tipoTrabajo}</td>
                      <td>{asignacion.trabajo?.fechaTrabajo}</td>
                      <td>{asignacion.producto?.nombre}</td>
                      <td>{asignacion.estacion?.nombre}</td>
                      <td>{asignacion.fechaAsignacion}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : trabajadorId ? (
          <p className="text-center text-muted">No hay asignaciones para este trabajador.</p>
        ) : null}
      </div>
    </div>
  );
};

export default AsignacionTrabajoInforme;
