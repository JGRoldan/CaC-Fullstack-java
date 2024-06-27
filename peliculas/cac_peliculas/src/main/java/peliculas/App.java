package peliculas;

import java.util.ArrayList;
import java.util.Arrays;

import peliculas.dao.PeliculasDAO;
import peliculas.model.Pelicula;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main(String[] args) {
        PeliculasDAO dao = new PeliculasDAO();
        ArrayList<Pelicula> pelis = dao.listar();

        for (Pelicula peli : pelis) {
            System.out.println(peli.toString());
        }
    }
}
