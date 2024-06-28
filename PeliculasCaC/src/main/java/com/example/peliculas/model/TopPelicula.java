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
@Table(name = "top_pelicula")
public class TopPelicula{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_top_pelicula;
    private String titulo_top_pelicula;
    private String resumen_top_pelicula;
    private String poster_top_pelicula;
    private Date fecha_de_lanzamiento_top_pelicula;
    private Float promedio_top_pelicula;
}
