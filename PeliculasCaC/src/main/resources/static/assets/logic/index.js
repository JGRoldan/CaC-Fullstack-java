import {fetchApiMovies , fetchTopRatedMovies} from './api.js'


const cargarPeliculas = async (numPage = 1) =>{
        const {content} = await fetchApiMovies(numPage - 1);
        const peliculasRender = document.querySelector('.peliculas-render');

        peliculasRender.innerHTML = '';

        content.forEach(({poster_pelicula, titulo_pelicula}) => {
            const peliculaHTML = renderizar(poster_pelicula, titulo_pelicula);
            peliculasRender.innerHTML += peliculaHTML;
        });
}

const renderizar = (poster_path, title) =>{
    return `
        <div class="col-lg-3 col-md-4 col-sm-6 mb-4 w-auto">
            <div class="card position-relative">
                <img src="https://image.tmdb.org/t/p/w500${poster_path}" class="card-img-top img-fluid" alt="${title}">
                <div class="card-title-hover position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
                    <h4 class="card-title text-white text-center">${title}</h4>
                </div>
            </div>
        </div>
    `
}

const cargarTopPeliculas = async () =>{
    const peliculas = await fetchTopRatedMovies()
    const peliculasRender = document.querySelector('.top-peliculas')

    peliculas.forEach( ({poster_top_pelicula, titulo_top_pelicula}) => {
        const peliculaHTML = renderizar(poster_top_pelicula, titulo_top_pelicula);
        peliculasRender.innerHTML += peliculaHTML;
    })
}

const buttonHandler = async () => {
    const prev = document.querySelector('.prev')
    const next = document.querySelector('.next')
    let contador = 1;

    prev.addEventListener('click', async ()=> {
        if (contador > 1) {
            contador--;
            await cargarPeliculas(contador);
        }
        goToTop()
    })
    
    next.addEventListener('click', async ()=> {
        contador++;
        await cargarPeliculas(contador)
        goToTop()
    })
}

const goToTop = () =>{
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
}

document.addEventListener('DOMContentLoaded', () => {
    cargarPeliculas()
    cargarTopPeliculas()
    buttonHandler()
})