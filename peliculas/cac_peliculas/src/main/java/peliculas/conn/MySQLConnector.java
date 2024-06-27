package peliculas.conn;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
/**
 * MySQLConnector
 */
public class MySQLConnector {

    private static Connection conn;
    private static Statement st;

    static {
         try {
            conn=DriverManager.getConnection("jdbc:mysql://localhost:3306/peliculas", "root", "");
            st= conn.createStatement();

        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    public static Connection getConn() {
        return conn;
    }

    public static Statement getSt() {
        return st;
    }
    
}