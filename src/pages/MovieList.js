import { useEffect, useState } from "react"
import { MovieCard } from "../components/MovieCard"

export const MovieList = () => {

  const BASE_URL = "https://api.themoviedb.org/3/movie/";
  const KEY = "api_key=789013c2e0390274172c1942a24ec572";

  const [movies, setMovies] = useState([]);

  useEffect( () => {
    async function fetchMovies() {
      const response = await fetch(BASE_URL + "now_playing?" + KEY);
      const data = await response.json();
      setMovies(data.results);
    }
    fetchMovies();
  }, []);

  return (
    <main>
      <section className="py-3">
        <div className="flex justify-start flex-wrap gap-6 pl-5">
          { movies.map( (movie) => (
            <MovieCard key={movie.id} movie={movie} />
          )) }
        </div>
      </section>
    </main>
  )
}
