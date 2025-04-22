// Definimos el paquete donde está este controlador
package com.metro.estaciones.controlador;

// Importamos las clases necesarias
import com.metro.estaciones.modelo.Producto;
import com.metro.estaciones.servicio.IProductoServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

// Anotación que indica que esta clase es un controlador REST
@RestController

// Ruta base para todas las peticiones: http://localhost:8080/api/productos
@RequestMapping("/api/productos")

// Permite que aplicaciones externas como React puedan hacer peticiones a este backend
@CrossOrigin(origins = "*")
public class ProductoControlador {

    // Inyectamos el servicio de productos para acceder a la lógica
    @Autowired
    private IProductoServicio productoServicio;

    // ----------------------------------------------
    // GET: Listar todos los productos
    // http://localhost:8080/api/productos
    @GetMapping
    public ResponseEntity<List<Producto>> obtenerTodos() {
        // Obtenemos todos los productos desde el servicio
        List<Producto> productos = productoServicio.listarProductos();

        // Retornamos los productos con un código HTTP 200 OK
        return ResponseEntity.ok(productos);
    }

    // ----------------------------------------------
    // GET: Obtener un producto por su ID
    // http://localhost:8080/api/productos/1
    @GetMapping("/{id}")
    public ResponseEntity<Producto> obtenerPorId(@PathVariable Long id) {
        // Buscamos el producto por ID
        Optional<Producto> producto = productoServicio.obtenerProductoPorId(id);

        // Si existe, lo devolvemos con HTTP 200
        // Si no existe, devolvemos HTTP 404 Not Found
        return producto.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // ----------------------------------------------
    // POST: Crear un nuevo producto
    // http://localhost:8080/api/productos
    // Se espera un JSON en el body con los datos del producto
    @PostMapping
    public ResponseEntity<Producto> crearProducto(@RequestBody Producto producto) {
        // Guardamos el nuevo producto
        Producto nuevo = productoServicio.guardarProducto(producto);

        // Lo devolvemos con HTTP 200 y los datos del producto creado
        return ResponseEntity.ok(nuevo);
    }

    // ----------------------------------------------
    // PUT: Actualizar un producto existente
    // http://localhost:8080/api/productos/1
    @PutMapping("/{id}")
    public ResponseEntity<Producto> actualizarProducto(@PathVariable Long id, @RequestBody Producto producto) {
        // Verificamos si existe el producto
        Optional<Producto> existente = productoServicio.obtenerProductoPorId(id);

        if (existente.isPresent()) {
            // Le aseguramos al objeto que tendrá el mismo ID del producto que se actualiza
            producto.setId(id);

            // Guardamos los cambios
            Producto actualizado = productoServicio.guardarProducto(producto);

            // Devolvemos el producto actualizado
            return ResponseEntity.ok(actualizado);
        } else {
            // Si no existe, retornamos 404
            return ResponseEntity.notFound().build();
        }
    }

    // ----------------------------------------------
    // DELETE: Eliminar un producto por ID
    // http://localhost:8080/api/productos/1
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarProducto(@PathVariable Long id) {
        // Verificamos si existe
        Optional<Producto> existente = productoServicio.obtenerProductoPorId(id);

        if (existente.isPresent()) {
            // Lo eliminamos
            productoServicio.eliminarProducto(id);

            // Retornamos código 204 No Content
            return ResponseEntity.noContent().build();
        } else {
            // Si no existe, retornamos 404
            return ResponseEntity.notFound().build();
        }
    }
}
