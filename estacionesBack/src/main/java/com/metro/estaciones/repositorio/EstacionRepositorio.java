package com.metro.estaciones.repositorio;

import com.metro.estaciones.modelo.Estacion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EstacionRepositorio extends JpaRepository<Estacion, Long> {
}
