package com.metro.estaciones.servicio;

import com.metro.estaciones.modelo.Producto;
import com.metro.estaciones.repositorio.ProductoRepositorio;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class ProductoServicioImplTest {

    @Mock
    private ProductoRepositorio productoRepositorio;

    @InjectMocks
    private ProductoServicioImpl productoServicioImpl;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGuardarProducto() {
        // Arrange
        Producto producto = new Producto();
        producto.setNombre("Cable de Fibra Óptica");
        producto.setCategoria("Materiales");
        producto.setStock(100);
        producto.setUnidadMedida("metros");

        when(productoRepositorio.save(any(Producto.class))).thenReturn(producto);

        // Act
        Producto resultado = productoServicioImpl.guardarProducto(producto);

        // Assert
        assertEquals("Cable de Fibra Óptica", resultado.getNombre());
        assertEquals("Materiales", resultado.getCategoria());
        assertEquals(100, resultado.getStock());
        assertEquals("metros", resultado.getUnidadMedida());

        verify(productoRepositorio, times(1)).save(producto);
    }

    @Test
    void testObtenerProductoPorId() {
        // Arrange
        Long productoId = 1L;
        Producto producto = new Producto();
        producto.setId(productoId);
        producto.setNombre("Cable de Fibra Óptica");
        producto.setCategoria("Materiales");
        producto.setStock(100);
        producto.setUnidadMedida("metros");

        when(productoRepositorio.findById(productoId)).thenReturn(Optional.of(producto));

        // Act
        Optional<Producto> resultado = productoServicioImpl.obtenerProductoPorId(productoId);

        // Assert
        assertTrue(resultado.isPresent());
        assertEquals("Cable de Fibra Óptica", resultado.get().getNombre());
        assertEquals("Materiales", resultado.get().getCategoria());
        assertEquals(100, resultado.get().getStock());
        assertEquals("metros", resultado.get().getUnidadMedida());

        verify(productoRepositorio, times(1)).findById(productoId);
    }

    @Test
    void testListarProductos() {
        // Arrange
        Producto producto1 = new Producto();
        producto1.setNombre("Cable de Fibra Óptica");

        Producto producto2 = new Producto();
        producto2.setNombre("Router");

        List<Producto> productos = Arrays.asList(producto1, producto2);

        when(productoRepositorio.findAll()).thenReturn(productos);

        // Act
        List<Producto> resultado = productoServicioImpl.listarProductos();

        // Assert
        assertEquals(2, resultado.size());
        assertEquals("Cable de Fibra Óptica", resultado.get(0).getNombre());
        assertEquals("Router", resultado.get(1).getNombre());

        verify(productoRepositorio, times(1)).findAll();
    }

    @Test
    void testEliminarProducto() {
        // Arrange
        Long productoId = 1L;

        doNothing().when(productoRepositorio).deleteById(productoId);

        // Act
        productoServicioImpl.eliminarProducto(productoId);

        // Assert
        verify(productoRepositorio, times(1)).deleteById(productoId);
    }

}
