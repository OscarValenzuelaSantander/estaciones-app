package com.metro.estaciones.servicio;

import com.metro.estaciones.modelo.Trabajador;
import com.metro.estaciones.repositorio.TrabajadorRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TrabajadorServicioImpl implements ITrabajadorServicio {

    @Autowired
    private TrabajadorRepositorio trabajadorRepositorio;

    @Override
    public List<Trabajador> listarTrabajadores() {
        return trabajadorRepositorio.findAll();
    }

    @Override
    public Optional<Trabajador> obtenerTrabajadorPorId(Long id) {
        return trabajadorRepositorio.findById(id);
    }

    @Override
    public Trabajador guardarTrabajador(Trabajador trabajador) {
        return trabajadorRepositorio.save(trabajador);
    }

    @Override
    public void eliminarTrabajador(Long id) {
        trabajadorRepositorio.deleteById(id);
    }
}
