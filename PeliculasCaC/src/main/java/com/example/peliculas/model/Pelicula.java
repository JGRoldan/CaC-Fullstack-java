package com.example.peliculas.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table (name = "pelicula")
public class Pelicula {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_pelicula;
    private String titulo_pelicula;
    private String resumen_pelicula;
    private String poster_pelicula;
    private Date fecha_de_lanzamiento;
    private Float promedio_pelicula;
}
