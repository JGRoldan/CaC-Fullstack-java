# Pelicula API - Codo a Codo 2024 - Fullstack Java

Esta API permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre una colección de películas. A continuación se detallan los endpoints disponibles y su funcionalidad.

## Endpoints

### Obtener todas las películas

- **URL**: `/api/peliculas`
- **Método HTTP**: `GET`
- **Descripción**: Este endpoint devuelve una lista de todas las películas disponibles.
- **Respuesta**:
  - **200 OK**: Lista de películas.

### Obtener películas con paginación

- **URL**: `/api/peliculas/pagination?page=${numPage}&size=20`
- **Método HTTP**: `GET`
- **Parámetros**:
  - `page` (opcional, por defecto `0`): Número de la página.
  - `size` (opcional, por defecto `20`): Tamaño de la página.
- **Descripción**: Este endpoint devuelve una lista paginada de películas.
- **Respuesta**:
  - **200 OK**: Página de películas.

### Obtener las películas destacadas

- **URL**: `/api/peliculas/top_movies`
- **Método HTTP**: `GET`
- **Descripción**: Este endpoint devuelve una lista de las películas destacadas.
- **Respuesta**:
  - **200 OK**: Lista de películas destacadas.

### Crear una nueva película

- **URL**: `/api/peliculas`
- **Método HTTP**: `POST`
- **Cuerpo de la solicitud**: Objeto JSON representando la nueva película.
- **Descripción**: Este endpoint permite crear una nueva película.
- **Respuesta**:
  - **201 Created**: Película creada exitosamente.
  - **400 Bad Request**: Solicitud inválida.

### Actualizar una película existente

- **URL**: `/api/peliculas/{id}`
- **Método HTTP**: `PUT`
- **Parámetros**:
  - `id` (requerido): ID de la película a actualizar.
- **Cuerpo de la solicitud**: Objeto JSON con los datos actualizados de la película.
- **Descripción**: Este endpoint permite actualizar una película existente.
- **Respuesta**:
  - **200 OK**: Película actualizada exitosamente.
  - **404 Not Found**: Película no encontrada.

### Eliminar una película

- **URL**: `/api/peliculas/{id}`
- **Método HTTP**: `DELETE`
- **Parámetros**:
  - `id` (requerido): ID de la película a eliminar.
- **Descripción**: Este endpoint permite eliminar una película por su ID.
- **Respuesta**:
  - **200 OK**: Película eliminada exitosamente.
  - **404 Not Found**: Película no encontrada.

