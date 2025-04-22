package com.metro.estaciones.controlador;

import com.metro.estaciones.modelo.Trabajador;
import com.metro.estaciones.servicio.ITrabajadorServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

// Esta clase manejará todas las rutas para trabajadores
@RestController
@RequestMapping("/api/trabajadores")
@CrossOrigin(origins = "*")
public class TrabajadorControlador {

    // Inyectamos el servicio para acceder a la lógica
    @Autowired
    private ITrabajadorServicio trabajadorServicio;

    // GET: Obtener todos los trabajadores
    @GetMapping
    public ResponseEntity<List<Trabajador>> obtenerTodos() {
        List<Trabajador> lista = trabajadorServicio.listarTrabajadores();
        return ResponseEntity.ok(lista);
    }

    // GET: Obtener un trabajador por su ID
    @GetMapping("/{id}")
    public ResponseEntity<Trabajador> obtenerPorId(@PathVariable Long id) {
        Optional<Trabajador> trabajador = trabajadorServicio.obtenerTrabajadorPorId(id);
        return trabajador.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // POST: Crear nuevo trabajador
    @PostMapping
    public ResponseEntity<Trabajador> crearTrabajador(@RequestBody Trabajador trabajador) {
        Trabajador nuevo = trabajadorServicio.guardarTrabajador(trabajador);
        return ResponseEntity.ok(nuevo);
    }

    // PUT: Actualizar un trabajador existente
    @PutMapping("/{id}")
    public ResponseEntity<Trabajador> actualizarTrabajador(@PathVariable Long id, @RequestBody Trabajador trabajador) {
        Optional<Trabajador> existente = trabajadorServicio.obtenerTrabajadorPorId(id);
        if (existente.isPresent()) {
            trabajador.setId(id); // Este método ya lo agregamos
            Trabajador actualizado = trabajadorServicio.guardarTrabajador(trabajador);
            return ResponseEntity.ok(actualizado);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // DELETE: Eliminar un trabajador por ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarTrabajador(@PathVariable Long id) {
        Optional<Trabajador> existente = trabajadorServicio.obtenerTrabajadorPorId(id);
        if (existente.isPresent()) {
            trabajadorServicio.eliminarTrabajador(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
