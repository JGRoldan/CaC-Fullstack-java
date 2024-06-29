import { fetchUploadPelicula, fetchApiMovieByID, updatePelicula } from "./api.js"
import { swalAlert } from "./popup.js"
import { cargarPeliculas } from "./update.js"

const btnAgregar = document.querySelector('.agregar-btn')
const btnActualizar = document.querySelector('.actualizar-btn')

const editarPelicula = async (id) => {
    const pelicula = await fetchApiMovieByID(id) // <- OBJETO
    const form = document.getElementById('pelicula-form')
    const titulo = document.getElementById('inlineFormInputName')
    const resumen = document.getElementById('inlineFormInputResumen')
    const fechaEstreno = document.getElementById('inlineFormInputEstreno')
    const puntuacion = document.getElementById('inlineFormPuntuacion')
    const imagen = document.getElementById('inlineFormImagen')

    btnAgregar.style.display = 'none'
    btnActualizar.style.display = 'block'

    if (pelicula) {
        titulo.value = pelicula.titulo_pelicula || ''
        resumen.value = pelicula.resumen_pelicula || ''
        const fechaEstrenoFormatted = new Date(pelicula.fecha_de_lanzamiento).toISOString().split('T')[0]
        fechaEstreno.value = fechaEstrenoFormatted || ''
        puntuacion.value = pelicula.promedio_pelicula || ''
        imagen.value = pelicula.poster_pelicula || ''
    }

    form.setAttribute('data-mode', 'update')
    form.setAttribute('data-id', id)
}

const uploadPelicula = () => {
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

        const mode = form.getAttribute('data-mode')
        const id = form.getAttribute('data-id')

        if (mode === 'update' && id) {
            try {
                await updatePelicula(id, nuevaPelicula)
                await cargarPeliculas()
                swalAlert('Película editada correctamente.')

                btnAgregar.style.display = 'block'
                btnActualizar.style.display = 'none'
                form.removeAttribute('data-mode')
                form.removeAttribute('data-id')
                form.reset()
            } catch (error) {
                console.error('Error al subir la película:', error)
            }
        } else {
            try {
                await fetchUploadPelicula(nuevaPelicula)
                await cargarPeliculas()
                swalAlert('Película agregada correctamente.')

                form.reset()
            } catch (error) {
                console.error('Error al subir la película:', error)
            }
        }
    })
}


document.addEventListener('DOMContentLoaded', () =>{
    editarPelicula()
    uploadPelicula()
})

export { editarPelicula }