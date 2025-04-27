package com.metro.estaciones.controlador;

import com.metro.estaciones.modelo.AsignacionTrabajo;
import com.metro.estaciones.servicio.IAsignacionTrabajoServicio;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/asignaciones-trabajo")
@CrossOrigin(origins = "http://localhost:5173")
public class AsignacionTrabajoControlador {

    private final IAsignacionTrabajoServicio asignacionTrabajoServicio;

    public AsignacionTrabajoControlador(IAsignacionTrabajoServicio asignacionTrabajoServicio) {
        this.asignacionTrabajoServicio = asignacionTrabajoServicio;
    }

    @PostMapping
    public ResponseEntity<AsignacionTrabajo> crearAsignacion(@RequestBody AsignacionTrabajo asignacionTrabajo) {
        AsignacionTrabajo nuevaAsignacion = asignacionTrabajoServicio.guardar(asignacionTrabajo);
        return ResponseEntity.ok(nuevaAsignacion);
    }

    @GetMapping
    public ResponseEntity<List<AsignacionTrabajo>> listarAsignaciones() {
        return ResponseEntity.ok(asignacionTrabajoServicio.listarTodos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<AsignacionTrabajo> obtenerAsignacionPorId(@PathVariable Long id) {
        return asignacionTrabajoServicio.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
