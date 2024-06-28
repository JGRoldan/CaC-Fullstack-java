
const fetchApiMovies = async (numPage) => {
     const URL = `http://localhost:8081/api/peliculas/pagination?page=${numPage}&size=20`;
     const response = await fetch(URL);
     const data = await response.json();
     return data;
}

const fetchTopRatedMovies = async () => {
      const URL = `http://localhost:8081/api/peliculas/top_movies`;
      const response = await fetch(URL);
      const data = await response.json();
      return data;
}

const fetchAllMovies = async () => {
      const URL = `http://localhost:8081/api/peliculas`;
      const response = await fetch(URL);
      const data = await response.json();
      return data;
}
 

export {fetchApiMovies, fetchTopRatedMovies, fetchAllMovies}