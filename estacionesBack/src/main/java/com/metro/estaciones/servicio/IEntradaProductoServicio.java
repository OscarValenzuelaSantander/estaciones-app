package com.metro.estaciones.servicio;

import com.metro.estaciones.modelo.EntradaProducto;

import java.util.List;
import java.util.Optional;

public interface IEntradaProductoServicio {
    List<EntradaProducto> listarEntradas();
    Optional<EntradaProducto> obtenerEntradaPorId(Long id);
    EntradaProducto guardarEntrada(EntradaProducto entrada);
    void eliminarEntrada(Long id);
}
