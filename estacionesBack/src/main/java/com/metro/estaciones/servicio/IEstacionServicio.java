package com.metro.estaciones.servicio;

import com.metro.estaciones.modelo.Estacion;

import java.util.List;
import java.util.Optional;

public interface IEstacionServicio {
    List<Estacion> obtenerTodas();

    Optional<Estacion> obtenerPorId(Long id);

    Estacion guardar(Estacion estacion);

    void eliminar(Long id);
}
