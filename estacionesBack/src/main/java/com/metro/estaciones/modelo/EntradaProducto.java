package com.metro.estaciones.modelo;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "entradas")
public class EntradaProducto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate fechaEntrada;

    private int cantidad;

    @ManyToOne
    @JoinColumn(name = "producto_id", nullable = false)
    private Producto producto;

    public EntradaProducto() {}

    public EntradaProducto(LocalDate fechaEntrada, int cantidad, Producto producto) {
        this.fechaEntrada = fechaEntrada;
        this.cantidad = cantidad;
        this.producto = producto;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public LocalDate getFechaEntrada() {
        return fechaEntrada;
    }

    public void setFechaEntrada(LocalDate fechaEntrada) {
        this.fechaEntrada = fechaEntrada;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }
}

