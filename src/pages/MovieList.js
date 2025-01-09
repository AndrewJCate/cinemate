import { MovieCard } from "../components/MovieCard"
import { useFetch } from "../hooks/useFetch";

export const MovieList = () => {

  const BASE_URL = "https://api.themoviedb.org/3/movie/";
  const KEY = "api_key=789013c2e0390274172c1942a24ec572";

  const { data: movies } = useFetch(BASE_URL + "now_playing?" + KEY);

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
