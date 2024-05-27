
const fetchApiMovies = async (numPage) => {
    const URL = `https://api.themoviedb.org/3/movie/popular?page=${numPage}`
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZGVmM2E4Y2YwODljZDRkYjQ0OWI4NTU4NGY3MzAwYyIsInN1YiI6IjY2NTRkMWVhNjY3MTUzYjNlZWE2NmQ2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ReBeimar5DlGo23pyxc0V48ffEgkJIjsZStfpAN-RqM'
        }
    }

    const response = await fetch(URL, options)
    const data = response.json()

    return data
}

const fetchTopRatedMovies = async () => {
    const URL = `https://api.themoviedb.org/3/movie/top_rated`
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZGVmM2E4Y2YwODljZDRkYjQ0OWI4NTU4NGY3MzAwYyIsInN1YiI6IjY2NTRkMWVhNjY3MTUzYjNlZWE2NmQ2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ReBeimar5DlGo23pyxc0V48ffEgkJIjsZStfpAN-RqM'
        }
    }

    const response = await fetch(URL, options)
    const data = response.json()

    return data
}
 

export {fetchApiMovies, fetchTopRatedMovies}