import { Routes, Route } from "react-router";
import { MovieDetails, MovieList, PageNotFound, SearchResults } from "../pages";

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="" element={ <MovieList /> } />
        <Route path="movies/toprated" element={ <MovieList /> } />
        <Route path="movies/popular" element={ <MovieList /> } />
        <Route path="movies/upcoming" element={ <MovieList /> } />
        <Route path="movies/search" element={ <SearchResults /> } />

        <Route path="movie/:id" element={ <MovieDetails /> } />

        <Route path="*" element={ <PageNotFound /> } />
    </Routes>
  )
}
