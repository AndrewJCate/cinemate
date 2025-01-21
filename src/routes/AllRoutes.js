import { Routes, Route } from "react-router-dom";
import { MovieDetails, MovieList, PageNotFound, Search } from "../pages";

export const AllRoutes = () => {
  return (
    <main>
      <Routes>
        <Route path="" element={ <MovieList path="/movie/now_playing" title="Home" /> } />
        <Route path="movies/toprated" element={ <MovieList path="/movie/top_rated" title="Top Rated" /> } />
        <Route path="movies/popular" element={ <MovieList path="/movie/popular" title="Popular" /> } />
        <Route path="movies/upcoming" element={ <MovieList path="/movie/upcoming" title="Upcoming" /> } />
        <Route path="movies/search" element={ <Search path="/search/movie" /> } />

        <Route path="movie/:id" element={ <MovieDetails path="/movie/" /> } />

        <Route path="*" element={ <PageNotFound title="Page Not Found" /> } />
      </Routes>
    </main>
  )
}
