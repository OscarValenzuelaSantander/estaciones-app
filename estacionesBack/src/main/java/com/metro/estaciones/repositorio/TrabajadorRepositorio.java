package com.metro.estaciones.repositorio;

import com.metro.estaciones.modelo.Trabajador;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TrabajadorRepositorio extends JpaRepository<Trabajador, Long> {
}
