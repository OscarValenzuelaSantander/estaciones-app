package com.metro.estaciones.servicio;

import com.metro.estaciones.modelo.AsignacionTrabajo;
import java.util.List;
import java.util.Optional;

public interface IAsignacionTrabajoServicio {

    List<AsignacionTrabajo> listarTodos();

    Optional<AsignacionTrabajo> buscarPorId(Long id);

    AsignacionTrabajo guardar(AsignacionTrabajo asignacionTrabajo);

    List<AsignacionTrabajo> listarPorTrabajadorId(Long trabajadorId);

}
