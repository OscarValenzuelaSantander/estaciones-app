package com.metro.estaciones.servicio;

import com.metro.estaciones.modelo.Trabajo;

import java.util.List;
import java.util.Optional;

public interface ITrabajoServicio {
    List<Trabajo> obtenerTodos();

    Optional<Trabajo> obtenerPorId(Long id);

    Trabajo guardar(Trabajo trabajo);

    void eliminar(Long id);
}
