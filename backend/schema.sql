/*
    POSSIBLE SQUEMA

    users_table(name, surname, email (PK), password, birthdate, terminos_y_cond (boolean))
    movie_table(id_movie (PK), name_movie, date_movie, abstract_movie, image_movie)

    //Relation director & movie
    director_table(id_director (PK), name_director)
    movie_director_table(id_movie_director (PK), id_movie (FK), id_director (FK))

    //Relation genre & movie
    genre_table(id_genre (PK), name_genre)
    movie_genre_table(id_movie_genre (PK), id_movie (FK), id_genre (FK))

    //Relation writer & movie
    writer_table(id_writer (PK), name_writer)
    movie_writer_table(id_movie_writer (PK), id_movie (FK), id_writer (FK))


+---------------------+
|   movie_table       |
+---------------------+
+----------+------------+------------+-----------------------+------------------------+
| id_movie | name_movie | date_movie |     abstract_movie    |      image_movie       |
+----------+------------+------------+-----------------------+------------------------+
|    1     | Pelicula 1 | 2020-03-16 | Resumen pelicula 1... | /images/Pelicula 1.jpg |
|    2     | Pelicula 2 | 1990-02-23 | Resumen pelicula 2... | /images/Pelicula 2.jpg |
|    3     | Pelicula 3 | 2008-01-18 |  Resumen pelicula 3.. | /images/Pelicula 3.jpg |
+----------+------------+------------+-----------------------+------------------------+

+---------------------+
|   director_table    |
+---------------------+
+-------------+---------------+
| id_director | name_director |
+-------------+---------------+
|      1      |   Director 1  |
|      2      |   Director 2  |
|      3      |   Director 3  |
+-------------+---------------+

+--------------------------+
| movie_director_table     |
+--------------------------+
+-------------------+----------+-------------+
| id_movie_director | id_movie | id_director |
+-------------------+----------+-------------+
|         1         |    1     |      1      |
|         2         |    2     |      2      |
|         3         |    2     |      1      |
+-------------------+----------+-------------+

+---------------------+
|     genre_table     |
+---------------------+
+----------+------------+
| id_genre | name_genre |
+----------+------------+
|    1     |  Genre 1   |
|    2     |  Genre 2   |
|    3     |  Genre 3   |
|    4     |  Genre 4   |
|    5     |  Genre 5   |
+----------+------------+

+------------------------+
| movie_genre_table      |
+------------------------+
+----------------+----------+----------+
| id_movie_genre | id_movie | id_genre |
+----------------+----------+----------+
|       1        |    1     |    1     |
|       2        |    1     |    2     |
|       3        |    2     |    2     |
|       4        |    3     |    1     |
+----------------+----------+----------+

+---------------------+
|   writer_table      | 
+---------------------+
+-----------+-------------+
| id_writer | name_writer |
+-----------+-------------+
|     1     |   Writer 1  |
|     2     |   Writer 2  |
|     3     |   Writer 3  |
+-----------+-------------+


+------------------------+
| movie_writer_table     |
+------------------------+
+-----------------+----------+-----------+
| id_movie_writer | id_movie | id_writer |
+-----------------+----------+-----------+
|        1        |    1     |     1     |
|        2        |    2     |     2     |
|        3        |    3     |     1     |
+-----------------+----------+-----------+

*/