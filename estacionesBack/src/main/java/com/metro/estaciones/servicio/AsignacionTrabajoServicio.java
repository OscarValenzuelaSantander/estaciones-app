package com.metro.estaciones.servicio;

import com.metro.estaciones.modelo.AsignacionTrabajo;
import com.metro.estaciones.repositorio.AsignacionTrabajoRepositorio;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class AsignacionTrabajoServicio implements IAsignacionTrabajoServicio {

    private final AsignacionTrabajoRepositorio asignacionTrabajoRepositorio;

    public AsignacionTrabajoServicio(AsignacionTrabajoRepositorio asignacionTrabajoRepositorio) {
        this.asignacionTrabajoRepositorio = asignacionTrabajoRepositorio;
    }

    @Override
    public List<AsignacionTrabajo> listarTodos() {
        return asignacionTrabajoRepositorio.findAll();
    }

    @Override
    public Optional<AsignacionTrabajo> buscarPorId(Long id) {
        return asignacionTrabajoRepositorio.findById(id);
    }

    @Override
    public AsignacionTrabajo guardar(AsignacionTrabajo asignacionTrabajo) {
        return asignacionTrabajoRepositorio.save(asignacionTrabajo);
    }
}
