package com.metro.estaciones.repositorio;

import com.metro.estaciones.modelo.Trabajo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TrabajoRepositorio extends JpaRepository<Trabajo, Long> {
}
