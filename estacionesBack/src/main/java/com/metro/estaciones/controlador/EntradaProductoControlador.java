package com.metro.estaciones.controlador;

import com.metro.estaciones.modelo.EntradaProducto;
import com.metro.estaciones.servicio.IEntradaProductoServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

// Indicamos que esta clase es un controlador REST
@RestController

// Ruta base para todas las operaciones de entrada
@RequestMapping("/api/entradas")

// Permite que el frontend (por ejemplo, React) haga peticiones
@CrossOrigin(origins = "*")
public class EntradaProductoControlador {

    // Inyectamos el servicio de EntradaProducto
    @Autowired
    private IEntradaProductoServicio entradaServicio;

    // ----------------------------------------------
    // GET: Listar todas las entradas
    // GET http://localhost:8080/api/entradas
    @GetMapping
    public ResponseEntity<List<EntradaProducto>> obtenerTodas() {
        List<EntradaProducto> entradas = entradaServicio.listarEntradas();
        return ResponseEntity.ok(entradas);
    }

    // ----------------------------------------------
    // GET: Obtener una entrada por ID
    // GET http://localhost:8080/api/entradas/1
    @GetMapping("/{id}")
    public ResponseEntity<EntradaProducto> obtenerPorId(@PathVariable Long id) {
        Optional<EntradaProducto> entrada = entradaServicio.obtenerEntradaPorId(id);
        return entrada.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // ----------------------------------------------
    // POST: Registrar nueva entrada de producto
    // POST http://localhost:8080/api/entradas
    // Body: JSON con datos de entrada (fecha, productoId, cantidad)
    @PostMapping
    public ResponseEntity<EntradaProducto> crearEntrada(@RequestBody EntradaProducto entrada) {
        EntradaProducto nueva = entradaServicio.guardarEntrada(entrada);
        return ResponseEntity.ok(nueva);
    }

    // ----------------------------------------------
    // PUT: Actualizar una entrada existente
    // PUT http://localhost:8080/api/entradas/1
    @PutMapping("/{id}")
    public ResponseEntity<EntradaProducto> actualizarEntrada(@PathVariable Long id, @RequestBody EntradaProducto entrada) {
        Optional<EntradaProducto> existente = entradaServicio.obtenerEntradaPorId(id);
        if (existente.isPresent()) {
            entrada.setId(id); // Aseguramos que tenga el ID correcto
            EntradaProducto actualizada = entradaServicio.guardarEntrada(entrada);
            return ResponseEntity.ok(actualizada);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // ----------------------------------------------
    // DELETE: Eliminar una entrada por ID
    // DELETE http://localhost:8080/api/entradas/1
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarEntrada(@PathVariable Long id) {
        Optional<EntradaProducto> existente = entradaServicio.obtenerEntradaPorId(id);
        if (existente.isPresent()) {
            entradaServicio.eliminarEntrada(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

