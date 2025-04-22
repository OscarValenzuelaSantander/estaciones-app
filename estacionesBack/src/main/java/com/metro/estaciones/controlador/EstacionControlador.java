package com.metro.estaciones.controlador;

import com.metro.estaciones.modelo.Estacion;
import com.metro.estaciones.servicio.IEstacionServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/estaciones")
@CrossOrigin(origins = "*")
public class EstacionControlador {

    private final IEstacionServicio estacionServicio;

    @Autowired
    public EstacionControlador(IEstacionServicio estacionServicio) {
        this.estacionServicio = estacionServicio;
    }

    @GetMapping
    public List<Estacion> obtenerTodas() {
        return estacionServicio.obtenerTodas();
    }

    @GetMapping("/{id}")
    public Optional<Estacion> obtenerPorId(@PathVariable Long id) {
        return estacionServicio.obtenerPorId(id);
    }

    @PostMapping
    public Estacion guardar(@RequestBody Estacion estacion) {
        return estacionServicio.guardar(estacion);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id) {
        estacionServicio.eliminar(id);
    }
}
