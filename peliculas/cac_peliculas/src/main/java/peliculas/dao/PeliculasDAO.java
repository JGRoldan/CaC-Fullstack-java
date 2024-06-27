package peliculas.dao;

import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;

import peliculas.conn.MySQLConnector;
import peliculas.model.Pelicula;

public class PeliculasDAO {

    public ArrayList<Pelicula> listar() {
        try {
            Statement st = MySQLConnector.getSt();
            ResultSet rs = st.executeQuery("SELECT * FROM pelicula");

            ArrayList<Pelicula> listaPelis = new ArrayList<>();
            while (rs.next()) {
                Pelicula p = new Pelicula(
                        rs.getInt("id_pelicula"),
                        rs.getString("titulo_pelicula"),
                        rs.getString("resumen_pelicula"),
                        rs.getString("poster_pelicula"),
                        rs.getDate("fecha_de_lanzamiento"),
                        rs.getFloat("promedio_pelicula")
                    );
                listaPelis.add(p);
                
            }
            return listaPelis;

        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
}
