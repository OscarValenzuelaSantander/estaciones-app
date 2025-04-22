package com.metro.estaciones.servicio;

import com.metro.estaciones.modelo.Merma;

import java.util.List;
import java.util.Optional;

public interface IMermaServicio {
    List<Merma> listarMermas();
    Optional<Merma> obtenerMermaPorId(Long id);
    Merma guardarMerma(Merma merma);
    void eliminarMerma(Long id);
}
