package com.metro.estaciones.controlador;

import com.metro.estaciones.modelo.Trabajo;
import com.metro.estaciones.servicio.ITrabajoServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/trabajos")
@CrossOrigin(origins = "*")
public class TrabajoControlador {

    private final ITrabajoServicio trabajoServicio;

    @Autowired
    public TrabajoControlador(ITrabajoServicio trabajoServicio) {
        this.trabajoServicio = trabajoServicio;
    }

    @GetMapping
    public List<Trabajo> obtenerTodos() {
        return trabajoServicio.obtenerTodos();
    }

    @GetMapping("/{id}")
    public Optional<Trabajo> obtenerPorId(@PathVariable Long id) {
        return trabajoServicio.obtenerPorId(id);
    }

    @PostMapping
    public Trabajo guardar(@RequestBody Trabajo trabajo) {
        return trabajoServicio.guardar(trabajo);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id) {
        trabajoServicio.eliminar(id);
    }
}
