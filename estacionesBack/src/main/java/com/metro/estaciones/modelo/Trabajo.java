package com.metro.estaciones.modelo;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "trabajos")
public class Trabajo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String tipoTrabajo;

    private LocalDate fechaTrabajo;

    @ManyToOne
    @JoinColumn(name = "trabajador_id")
    private Trabajador trabajador;

    @ManyToOne
    @JoinColumn(name = "producto_id")
    private Producto producto;

    @ManyToOne
    @JoinColumn(name = "estacion_id")
    private Estacion estacion;

    // Constructores
    public Trabajo() {}

    public Trabajo(String tipoTrabajo, LocalDate fechaTrabajo, Trabajador trabajador, Producto producto, Estacion estacion) {
        this.tipoTrabajo = tipoTrabajo;
        this.fechaTrabajo = fechaTrabajo;
        this.trabajador = trabajador;
        this.producto = producto;
        this.estacion = estacion;
    }

    // Getters y Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTipoTrabajo() {
        return tipoTrabajo;
    }

    public void setTipoTrabajo(String tipoTrabajo) {
        this.tipoTrabajo = tipoTrabajo;
    }

    public LocalDate getFechaTrabajo() {
        return fechaTrabajo;
    }

    public void setFechaTrabajo(LocalDate fechaTrabajo) {
        this.fechaTrabajo = fechaTrabajo;
    }

    public Trabajador getTrabajador() {
        return trabajador;
    }

    public void setTrabajador(Trabajador trabajador) {
        this.trabajador = trabajador;
    }

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }

    public Estacion getEstacion() {
        return estacion;
    }

    public void setEstacion(Estacion estacion) {
        this.estacion = estacion;
    }
}
