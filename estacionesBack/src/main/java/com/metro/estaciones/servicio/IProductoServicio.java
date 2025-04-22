package com.metro.estaciones.servicio;

import com.metro.estaciones.modelo.Producto;

import java.util.List;
import java.util.Optional;

public interface IProductoServicio {
    List<Producto> listarProductos();
    Optional<Producto> obtenerProductoPorId(Long id);
    Producto guardarProducto(Producto producto);
    void eliminarProducto(Long id);
}

