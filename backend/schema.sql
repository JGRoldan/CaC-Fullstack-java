/*
    POSSIBLE SQUEMA

    users_table(name, surname, email (PK), password, birthdate, terminos_y_cond (boolean))
    movie_table(id_movie (PK), name_movie,date_movie, director_movie, abstract_movie, genre_movie, writer_movie, image_movie)

    //Relation director & movie
    director_table(id_director (PK), name_director)
    movie_director_table(id_movie_director (PK), id_movie (FK), id_director (FK))

    //Relation genre & movie
    genre_table(id_genre (PK), name_genre)
    movie_genre_table(id_movie_genre (PK), id_movie (FK), id_genre (FK))

    //Relation writer & movie
    writer_table(id_writer (PK), name_writer)
    movie_writer_table(id_movie_writer (PK), id_movie (FK), id_writer (FK))

*/