package com.example.peliculas.repositories;

import com.example.peliculas.model.Pelicula;
import com.example.peliculas.model.TopPelicula;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ITopPeliculaRepository extends JpaRepository<TopPelicula, Integer> {
}
