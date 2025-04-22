package com.metro.estaciones.controlador;

import com.metro.estaciones.modelo.Merma;
import com.metro.estaciones.servicio.IMermaServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

// Definimos esta clase como controlador REST
@RestController

// Ruta base para todas las operaciones con mermas
@RequestMapping("/api/mermas")

// Permitimos acceso desde el frontend (React)
@CrossOrigin(origins = "*")
public class MermaControlador {

    // Inyectamos el servicio de mermas
    @Autowired
    private IMermaServicio mermaServicio;

    // ----------------------------------------------
    // GET: Listar todas las mermas
    // http://localhost:8080/api/mermas
    @GetMapping
    public ResponseEntity<List<Merma>> obtenerTodas() {
        List<Merma> lista = mermaServicio.listarMermas();
        return ResponseEntity.ok(lista);
    }

    // ----------------------------------------------
    // GET: Obtener una merma por ID
    // http://localhost:8080/api/mermas/1
    @GetMapping("/{id}")
    public ResponseEntity<Merma> obtenerPorId(@PathVariable Long id) {
        Optional<Merma> merma = mermaServicio.obtenerMermaPorId(id);
        return merma.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // ----------------------------------------------
    // POST: Registrar una nueva merma
    // http://localhost:8080/api/mermas
    @PostMapping
    public ResponseEntity<Merma> crear(@RequestBody Merma merma) {
        Merma nueva = mermaServicio.guardarMerma(merma);
        return ResponseEntity.ok(nueva);
    }

    // ----------------------------------------------
    // PUT: Actualizar una merma
    // http://localhost:8080/api/mermas/1
    @PutMapping("/{id}")
    public ResponseEntity<Merma> actualizar(@PathVariable Long id, @RequestBody Merma merma) {
        Optional<Merma> existente = mermaServicio.obtenerMermaPorId(id);
        if (existente.isPresent()) {
            merma.setId(id); // aseguramos que se actualice la correcta
            return ResponseEntity.ok(mermaServicio.guardarMerma(merma));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // ----------------------------------------------
    // DELETE: Eliminar una merma
    // http://localhost:8080/api/mermas/1
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        Optional<Merma> existente = mermaServicio.obtenerMermaPorId(id);
        if (existente.isPresent()) {
            mermaServicio.eliminarMerma(id);
            return ResponseEntity.noContent().build(); // 204 OK
        } else {
            return ResponseEntity.notFound().build();  // 404
        }
    }
}
