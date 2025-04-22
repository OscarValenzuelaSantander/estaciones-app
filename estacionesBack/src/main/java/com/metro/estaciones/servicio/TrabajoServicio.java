package com.metro.estaciones.servicio;

import com.metro.estaciones.modelo.Trabajo;
import com.metro.estaciones.repositorio.TrabajoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TrabajoServicio implements ITrabajoServicio {

    private final TrabajoRepositorio trabajoRepositorio;

    @Autowired
    public TrabajoServicio(TrabajoRepositorio trabajoRepositorio) {
        this.trabajoRepositorio = trabajoRepositorio;
    }

    @Override
    public List<Trabajo> obtenerTodos() {
        return trabajoRepositorio.findAll();
    }

    @Override
    public Optional<Trabajo> obtenerPorId(Long id) {
        return trabajoRepositorio.findById(id);
    }

    @Override
    public Trabajo guardar(Trabajo trabajo) {
        return trabajoRepositorio.save(trabajo);
    }

    @Override
    public void eliminar(Long id) {
        trabajoRepositorio.deleteById(id);
    }
}
