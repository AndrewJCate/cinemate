import { useSearchParams } from "react-router-dom";
import { MovieCard } from "../components/MovieCard";
import { useFetch, useUpdateTitle } from "../hooks/index";
import { useEffect, useState } from "react";

export const Search = ({path}) => {
  const [searchParams] = useSearchParams();
  const [queryString, setQueryString] = useState();

  useEffect(() => {
    setQueryString(searchParams.get("query"));
  }, [searchParams]);

  useUpdateTitle(`Search "${queryString}"`);

  const { data: movies } = useFetch(path, queryString);

  return (
    <main>
      <div >
        <p className="text-3xl font-semibold text-dark-gray dark:text-light-gray my-5 pl-5">
          { ( movies.length === 0 ) ? "No movies found." : `Results for "${queryString}":`}
        </p>
      </div>
      <section className="py-5">
        <div className="flex justify-center xl:justify-start flex-wrap gap-6 pl-5">
          { movies.map( (movie) => (
            <MovieCard key={movie.id} movie={movie} />
          )) }
        </div>
      </section>
    </main>
  )
}
