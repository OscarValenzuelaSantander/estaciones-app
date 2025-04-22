package com.metro.estaciones.servicio;

import com.metro.estaciones.modelo.Estacion;
import com.metro.estaciones.repositorio.EstacionRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EstacionServicio implements IEstacionServicio {

    private final EstacionRepositorio estacionRepositorio;

    @Autowired
    public EstacionServicio(EstacionRepositorio estacionRepositorio) {
        this.estacionRepositorio = estacionRepositorio;
    }

    @Override
    public List<Estacion> obtenerTodas() {
        return estacionRepositorio.findAll();
    }

    @Override
    public Optional<Estacion> obtenerPorId(Long id) {
        return estacionRepositorio.findById(id);
    }

    @Override
    public Estacion guardar(Estacion estacion) {
        return estacionRepositorio.save(estacion);
    }

    @Override
    public void eliminar(Long id) {
        estacionRepositorio.deleteById(id);
    }
}
