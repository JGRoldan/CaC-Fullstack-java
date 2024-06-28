
const fetchApiMovies = async (numPage) => {
     const URL = `http://localhost:8081/api/peliculas/pagination?page=${numPage}&size=20`
     const response = await fetch(URL)
     const data = await response.json()
     return data
}

const fetchTopRatedMovies = async () => {
      const URL = `http://localhost:8081/api/peliculas/top_movies`
      const response = await fetch(URL)
      const data = await response.json()
      return data
}

const fetchAllMovies = async () => {
      const URL = `http://localhost:8081/api/peliculas`
      const response = await fetch(URL)
      const data = await response.json()
      return data
}

const fetchUploadPelicula = async (data) =>{
      const response = await fetch(
                  'http://localhost:8081/api/peliculas',{
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(data)
            }
      )
      if (!response.ok) {
            throw new Error('Error al subir la película: ' + response.statusText)
        }
    
      return response.text()   
}

const deletePelicula = async (id) =>{
      const response = await fetch(`http://localhost:8081/api/peliculas/${id}`, {method: 'DELETE'})
      if (!response.ok) {
            throw new Error('Error al eliminar la película: ' + response.statusText)
      }

      return response.text()  
}
 

export {fetchApiMovies, fetchTopRatedMovies, fetchAllMovies, fetchUploadPelicula, deletePelicula}