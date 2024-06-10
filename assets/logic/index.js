import {fetchApiMovies , fetchTopRatedMovies} from './api.js'


const cargarPeliculas = async (numPage = 1) =>{
    const {results} = await fetchApiMovies(numPage)
    const peliculasRender = document.querySelector('.peliculas-render')
    
    /*Script para obtener datos en  formato SQL*/
    // results.forEach(({poster_path, title, overview, release_date, vote_average}) =>{
    //     console.log(`("${title}", "${overview}", "https://image.tmdb.org/t/p/w500${poster_path}", "${release_date}", ${vote_average}),`)
    // })

    peliculasRender.innerHTML = ''

    results.forEach( ({poster_path, title}) => {
        const peliculaHTML = renderizar({ poster_path, title });
        peliculasRender.innerHTML += peliculaHTML;
    })

}

const renderizar = ({poster_path, title}) =>{
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
    const {results} = await fetchTopRatedMovies()
    const peliculasRender = document.querySelector('.top-peliculas')


    /*Script para obtener datos en  formato SQL*/
    // results.forEach(({poster_path, title, overview, release_date, vote_average}) =>{
    //     console.log(`("${title}", "${overview}", "https://image.tmdb.org/t/p/w500${poster_path}", "${release_date}", ${vote_average}),`)
    // })

    results.forEach( ({poster_path, title}) => {
        const peliculaHTML = renderizar({ poster_path, title });
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