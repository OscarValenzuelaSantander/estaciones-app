package com.metro.estaciones.servicio;

import com.metro.estaciones.modelo.AsignacionTrabajo;
import com.metro.estaciones.modelo.Producto;
import com.metro.estaciones.modelo.Trabajador;
import com.metro.estaciones.modelo.Estacion;
import com.metro.estaciones.repositorio.AsignacionTrabajoRepositorio;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import java.time.LocalDate;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.assertEquals;

class AsignacionTrabajoServicioTest {

    @Mock
    private AsignacionTrabajoRepositorio asignacionTrabajoRepositorio;

    @InjectMocks
    private AsignacionTrabajoServicio asignacionTrabajoServicio;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGuardarAsignacionTrabajo() {
        // Arrange
        Trabajador trabajador = new Trabajador();
        trabajador.setNombreCompleto("Carlos López");

        Producto producto = new Producto();
        producto.setNombre("Cable de Fibra Óptica");

        Estacion estacion = new Estacion();
        estacion.setNombre("Estación Central");

        AsignacionTrabajo asignacion = new AsignacionTrabajo();
        asignacion.setTrabajador(trabajador);
        asignacion.setProducto(producto);
        asignacion.setEstacion(estacion);
        asignacion.setFechaAsignacion(LocalDate.parse("2025-05-01"));

        when(asignacionTrabajoRepositorio.save(any(AsignacionTrabajo.class))).thenReturn(asignacion);

        // Act
        AsignacionTrabajo resultado = asignacionTrabajoServicio.guardar(asignacion);

        // Assert
        assertEquals("Carlos López", resultado.getTrabajador().getNombreCompleto());
        assertEquals("Cable de Fibra Óptica", resultado.getProducto().getNombre());
        assertEquals("Estación Central", resultado.getEstacion().getNombre());
        assertEquals(LocalDate.parse("2025-05-01"), resultado.getFechaAsignacion());

        verify(asignacionTrabajoRepositorio, times(1)).save(asignacion);
    }
}
