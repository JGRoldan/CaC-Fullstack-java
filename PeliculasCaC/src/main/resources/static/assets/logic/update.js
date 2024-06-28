import {fetchAllMovies, deletePelicula} from './api.js'
import { swalAlert } from './popup.js'

const renderizar = (pelicula, tbody) =>{
    const tr = document.createElement('tr')

    tr.innerHTML = `
        <td>${pelicula.titulo_pelicula}</td>
        <td>${pelicula.resumen_pelicula}</td>
        <td>${pelicula.fecha_de_lanzamiento}</td>
        <td>${pelicula.promedio_pelicula}</td>
        <td><img src="${pelicula.poster_pelicula}" alt="Poster" style="width: 50px; height: auto;"></td>
        <td>
            <i class="bi bi-pencil-square edit-icon" data-id="${pelicula.id_pelicula}"></i>
            <i class="bi bi-trash delete-icon" data-id="${pelicula.id_pelicula}"></i>
        </td>
    `;

    tbody.appendChild(tr)

    tr.querySelector('.edit-icon').addEventListener('click', () => editarPelicula(pelicula.id_pelicula))
    tr.querySelector('.delete-icon').addEventListener('click', () => borrarPelicula(pelicula.id_pelicula))

    return
}

const cargarPeliculas = async () =>{
    const peliculas = await fetchAllMovies()

    const tbody = document.getElementById('peliculas-tbody')
    tbody.innerHTML = '' 

    peliculas.forEach(pelicula => {
        renderizar(pelicula, tbody)
    });
    
}

const editarPelicula = (id) => {
    console.log(`Editar pelicula con id: ${id}`)
    swalAlert('Pelicula editada correctamente.')
}

const borrarPelicula = (id) => {
    deletePelicula(id)
        .then(() => cargarPeliculas())
        .catch(error => console.error('Error al eliminar la película:', error))
    
    swalAlert('Pelicula borrada correctamente.')
}

document.addEventListener('DOMContentLoaded', () => {
    cargarPeliculas()
})

export {cargarPeliculas}