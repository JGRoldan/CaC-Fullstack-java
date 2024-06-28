package com.example.peliculas.controller;

import com.example.peliculas.model.Pelicula;
import com.example.peliculas.model.TopPelicula;
import com.example.peliculas.services.PeliculaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/peliculas")
public class PeliculaController {

    @Autowired
    private PeliculaService peliculaService;

    @GetMapping
    public ResponseEntity<List<Pelicula>> getPeliculas(){return peliculaService.getPeliculas();}

    @GetMapping("/pagination")
    public ResponseEntity<Page<Pelicula>> getPageablePeliculas(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "20") int size) {
        return peliculaService.getPeliculasPageable(page, size);
    }

    @GetMapping("/top_movies")
    public ResponseEntity<List<TopPelicula>> getTopPeliculas() {
        return peliculaService.getTopPeliculas();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteByID (@PathVariable Integer id){
        return peliculaService.deleteByID(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updatePelicula(@PathVariable Integer id, @RequestBody Pelicula pelicula){
        return peliculaService.updateByID(id, pelicula);
    }

    @PostMapping
    public ResponseEntity<String> createPelicula(@RequestBody Pelicula pelicula){
        return peliculaService.createPelicula(pelicula);
    }
}
