package com.example.peliculas.repositories;

import com.example.peliculas.model.Pelicula;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPeliculaRepository extends JpaRepository<Pelicula, Integer> {
}
