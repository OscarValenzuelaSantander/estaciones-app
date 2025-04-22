package com.metro.estaciones.servicio;

import com.metro.estaciones.modelo.Trabajador;

import java.util.List;
import java.util.Optional;

public interface ITrabajadorServicio {
    List<Trabajador> listarTrabajadores();
    Optional<Trabajador> obtenerTrabajadorPorId(Long id);
    Trabajador guardarTrabajador(Trabajador trabajador);
    void eliminarTrabajador(Long id);
}

