package com.metro.estaciones.repositorio;

import com.metro.estaciones.modelo.EntradaProducto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EntradaProductoRepositorio extends JpaRepository<EntradaProducto, Long> {
}
