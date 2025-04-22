package com.metro.estaciones.servicio;

import com.metro.estaciones.modelo.EntradaProducto;
import com.metro.estaciones.repositorio.EntradaProductoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EntradaProductoServicioImpl implements IEntradaProductoServicio {

    @Autowired
    private EntradaProductoRepositorio entradaRepositorio;

    @Override
    public List<EntradaProducto> listarEntradas() {
        return entradaRepositorio.findAll();
    }

    @Override
    public Optional<EntradaProducto> obtenerEntradaPorId(Long id) {
        return entradaRepositorio.findById(id);
    }

    @Override
    public EntradaProducto guardarEntrada(EntradaProducto entrada) {
        return entradaRepositorio.save(entrada);
    }

    @Override
    public void eliminarEntrada(Long id) {
        entradaRepositorio.deleteById(id);
    }
}
