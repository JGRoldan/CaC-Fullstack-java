package peliculas.model;

import java.sql.Date;

public class Pelicula {
    private int id;
    private String titulo_pelicula;
    private String resumen_pelicula;
    private String poster_pelicula;
    private Date fecha_de_lanzamientos;
    private Float promedio_pelicula;
    
    public Pelicula(int id, String titulo_pelicula, String resumen_pelicula, String poster_pelicula, Date fecha_de_lanzamiento, Float promedio_pelicula){
        this.id = id;
        this.titulo_pelicula = titulo_pelicula;
        this.resumen_pelicula = resumen_pelicula;
        this.poster_pelicula = poster_pelicula;
        this.fecha_de_lanzamientos = fecha_de_lanzamiento;
        this.promedio_pelicula = promedio_pelicula;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitulo_pelicula() {
        return titulo_pelicula;
    }

    public void setTitulo_pelicula(String titulo_pelicula) {
        this.titulo_pelicula = titulo_pelicula;
    }

    public String getResumen_pelicula() {
        return resumen_pelicula;
    }

    public void setResumen_pelicula(String resumen_pelicula) {
        this.resumen_pelicula = resumen_pelicula;
    }

    public String getPoster_pelicula() {
        return poster_pelicula;
    }

    public void setPoster_pelicula(String poster_pelicula) {
        this.poster_pelicula = poster_pelicula;
    }

    public Date getFecha_de_lanzamientos() {
        return fecha_de_lanzamientos;
    }

    public void setFecha_de_lanzamientos(Date fecha_de_lanzamientos) {
        this.fecha_de_lanzamientos = fecha_de_lanzamientos;
    }

    public Float getPromedio_pelicula() {
        return promedio_pelicula;
    }

    public void setPromedio_pelicula(Float promedio_pelicula) {
        this.promedio_pelicula = promedio_pelicula;
    }

    @Override
    public String toString() {
        return "Pelicula [id=" + id + ", titulo_pelicula=" + titulo_pelicula + ", fecha_de_lanzamientos="
                + fecha_de_lanzamientos + ", promedio_pelicula=" + promedio_pelicula + "]";
    }

    
}
