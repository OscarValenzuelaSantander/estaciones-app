package com.metro.estaciones.repositorio;

import com.metro.estaciones.modelo.AsignacionTrabajo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AsignacionTrabajoRepositorio extends JpaRepository<AsignacionTrabajo, Long> {
}
