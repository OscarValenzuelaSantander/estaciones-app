package com.metro.estaciones.servicio;

import com.metro.estaciones.modelo.Merma;
import com.metro.estaciones.repositorio.MermaRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MermaServicioImpl implements IMermaServicio {

    @Autowired
    private MermaRepositorio mermaRepositorio;

    @Override
    public List<Merma> listarMermas() {
        return mermaRepositorio.findAll();
    }

    @Override
    public Optional<Merma> obtenerMermaPorId(Long id) {
        return mermaRepositorio.findById(id);
    }

    @Override
    public Merma guardarMerma(Merma merma) {
        return mermaRepositorio.save(merma);
    }

    @Override
    public void eliminarMerma(Long id) {
        mermaRepositorio.deleteById(id);
    }
}

