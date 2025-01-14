import { Routes, Route } from "react-router-dom";
import { MovieDetails, MovieList, PageNotFound, Search } from "../pages";

export const AllRoutes = () => {
  return (
    <main>
      <Routes>
        <Route path="" element={ <MovieList path="/movie/now_playing" /> } />
        <Route path="movies/toprated" element={ <MovieList path="/movie/top_rated" /> } />
        <Route path="movies/popular" element={ <MovieList path="/movie/popular" /> } />
        <Route path="movies/upcoming" element={ <MovieList path="/movie/upcoming" /> } />
        <Route path="movies/search" element={ <Search path="/search/movie" /> } />

        <Route path="movie/:id" element={ <MovieDetails path="" /> } />

        <Route path="*" element={ <PageNotFound /> } />
      </Routes>
    </main>
    
  )
}
