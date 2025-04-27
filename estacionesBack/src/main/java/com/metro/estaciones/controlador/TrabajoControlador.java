package com.metro.estaciones.controlador;

import com.metro.estaciones.modelo.Trabajo;
import com.metro.estaciones.servicio.ITrabajoServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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


    @PutMapping("/{id}")
    public ResponseEntity<Trabajo> actualizarTrabajo(
            @PathVariable Long id,
            @RequestBody Trabajo trabajoActualizado
    ) {
        Optional<Trabajo> trabajoExistente = trabajoServicio.obtenerPorId(id);
        if (trabajoExistente.isPresent()) {
            Trabajo trabajo = trabajoExistente.get();

            if (trabajoActualizado.getTrabajador() != null) {
                trabajo.setTrabajador(trabajoActualizado.getTrabajador());
            }
            if (trabajoActualizado.getProducto() != null) {
                trabajo.setProducto(trabajoActualizado.getProducto());
            }
            if (trabajoActualizado.getEstacion() != null) {
                trabajo.setEstacion(trabajoActualizado.getEstacion());
            }

            Trabajo actualizado = trabajoServicio.guardar(trabajo);
            return ResponseEntity.ok(actualizado);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    @PostMapping("/completo")
    public ResponseEntity<Trabajo> crearTrabajoCompleto(@RequestBody Trabajo trabajo) {
        Trabajo nuevo = trabajoServicio.guardar(trabajo);
        return ResponseEntity.status(HttpStatus.CREATED).body(nuevo);
    }


}
