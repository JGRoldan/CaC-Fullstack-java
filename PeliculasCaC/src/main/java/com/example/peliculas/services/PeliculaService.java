package com.example.peliculas.services;

import com.example.peliculas.model.Pelicula;
import com.example.peliculas.model.TopPelicula;
import com.example.peliculas.repositories.IPeliculaRepository;
import com.example.peliculas.repositories.ITopPeliculaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class PeliculaService {

    @Autowired
    private IPeliculaRepository peliculaRepository;

    @Autowired
    private ITopPeliculaRepository topPelicula;

    public ResponseEntity<List<Pelicula>> getPeliculas(){
        return new ResponseEntity<>(peliculaRepository.findAll(), HttpStatus.OK);
    }

    public ResponseEntity<Pelicula> getPeliculaByID(@PathVariable Integer id){
        Optional<Pelicula> pelicula = peliculaRepository.findById(id);
        if (pelicula.isEmpty()) {
            throw new RuntimeException();
        }
        return new ResponseEntity<Pelicula>(pelicula.get(), HttpStatus.OK);
    }

    public ResponseEntity<Page<Pelicula>> getPeliculasPageable(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Pelicula> peliculasPage = peliculaRepository.findAll(pageable);
        return new ResponseEntity<>(peliculasPage, HttpStatus.OK);
    }

    public ResponseEntity<List<TopPelicula>> getTopPeliculas(){
        return new ResponseEntity<>(topPelicula.findAll(), HttpStatus.OK);
    }

    public ResponseEntity<Object> deleteByID(@PathVariable Integer id){
        Optional<Pelicula> pelicula = peliculaRepository.findById(id);
        Map<String, Object> response = new HashMap<>();

        if (pelicula.isEmpty()) {
            throw new RuntimeException();
        }

        response.put("message", "Pelicula borrada exitosamente con ID=" + pelicula.get().getId_pelicula());
        peliculaRepository.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    public ResponseEntity<Object> updateByID(@PathVariable Integer id, @RequestBody Pelicula peli){
        try {
            Optional<Pelicula> pelicula = peliculaRepository.findById(id);
            Map<String, Object> response = new HashMap<>();

            if (pelicula.isEmpty()) {
                throw new RuntimeException();
            }
            System.out.println(pelicula.get());
            Pelicula existingPelicula = pelicula.get();
            existingPelicula.setTitulo_pelicula(peli.getTitulo_pelicula());
            existingPelicula.setResumen_pelicula(peli.getResumen_pelicula());
            existingPelicula.setFecha_de_lanzamiento(peli.getFecha_de_lanzamiento());
            existingPelicula.setPromedio_pelicula(peli.getPromedio_pelicula());
            existingPelicula.setPoster_pelicula(peli.getPoster_pelicula());

            peliculaRepository.save(existingPelicula);
            response.put("message", "Pelicula actualizada exitosamente con ID=" + pelicula.get().getId_pelicula());
            return ResponseEntity.status(HttpStatus.OK).body(response);

        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>("Error interno del servidor.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public ResponseEntity<Object> createPelicula(@RequestBody Pelicula peli) {
        Pelicula pelicula = peliculaRepository.save(peli);
        Map<String, Object> response = new HashMap<>();
        response.put("message", "Pelicula creada exitosamente con ID=" + pelicula.getId_pelicula());
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

}
