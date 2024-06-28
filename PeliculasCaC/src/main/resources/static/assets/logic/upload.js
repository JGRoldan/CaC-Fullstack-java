import { fetchUploadPelicula } from "./api.js"
import { swalAlert } from "./popup.js"
import { cargarPeliculas } from "./update.js"

const uploadPelicula = () =>{
    const form = document.getElementById('pelicula-form')
    form.addEventListener('submit', async (e) => {
        e.preventDefault() 

        const titulo = document.getElementById('inlineFormInputName').value
        const resumen = document.getElementById('inlineFormInputResumen').value
        const fechaEstreno = document.getElementById('inlineFormInputEstreno').value
        const puntuacion = document.getElementById('inlineFormPuntuacion').value
        const imagen = document.getElementById('inlineFormImagen').value

        const nuevaPelicula = {
            titulo_pelicula: titulo,
            resumen_pelicula: resumen,
            fecha_de_lanzamiento: fechaEstreno,
            promedio_pelicula: puntuacion,
            poster_pelicula: imagen
        }

        fetchUploadPelicula(nuevaPelicula)
        .then(() => cargarPeliculas())
        .catch(error => console.error('Error al subir la película:', error));

        swalAlert('Pelicula agregada correctamente.')

        form.reset() 
    })
}

document.addEventListener('DOMContentLoaded', () =>{
    uploadPelicula()
})