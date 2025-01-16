import { MovieCard } from "../components/MovieCard"
import { useFetch } from "../hooks/useFetch";

export const MovieList = ( {path} ) => {
  const { data: movies } = useFetch(path);

  return (
    <main>
      <section className="py-3">
        <div className="flex justify-center xl:justify-start flex-wrap gap-6 pl-5">
          { movies.map( (movie) => (
            <MovieCard key={movie.id} movie={movie} />
          )) }
        </div>
      </section>
    </main>
  )
}
