import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DefaultImage from "../assets/images/default-movie-poster.jpg";

export const MovieDetails = ({path}) => {

  const BASE_URL = "https://api.themoviedb.org/3";
  const KEY      = "?api_key=" + process.env.REACT_APP_API_KEY;

  const params = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const {budget, imdb_id, genres, overview, poster_path, release_date, revenue, runtime, title, vote_average, vote_count} = movieDetails;

  const BASE_IMG_URL = "http://image.tmdb.org/t/p/w500";
  const IMAGE_PATH = (poster_path) ? BASE_IMG_URL + poster_path : DefaultImage;

  useEffect( () => {
    async function fetchMovie() {
      const response = await fetch(BASE_URL + path + params.id + KEY);
      const json = await response.json();
      setMovieDetails(json);
    }
    fetchMovie();
  }, [path, KEY, params.id]);

  const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    trailingZeroDisplay: 'stripIfInteger',
  });

  const date = new Date(release_date);
  const month = date.toLocaleString('default', {month: 'long'});

  return (
    <main>
      <section className="flex flex-wrap justify-center text-dark-gray dark:text-light-gray mt-1 sm:mt-3">

        <div className="max-w-sm sm:min-w-80">
          <img className="rounded-lg" src={IMAGE_PATH} alt={`${title} poster`}></img>
        </div>

        <div className="flex flex-col gap-5 mt-3 xmd:mt-7 sm:ml-8 max-w-md">
          <h1 className="text-4xl font-semibold sm:text-4.5xl mt-3 sm:mt-5">{title}</h1>

          <p>{overview}</p>

          <div id="genres" className="flex flex-wrap gap-3">
            { genres?.map( (genre, id) => {
              return (
                <span key={id} className="border rounded border-dark-gray dark:border-light-gray p-2 w-fit">{genre.name}</span>
              );
            }) }
          </div>
          
          <div id="movie-stats">
            <div className="flex items-center" id="rating">
              <svg className="w-4 h-4 text-hover-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <p className="ms-1 text-dark-gray dark:text-light-gray"><span className="font-bold mr-1">Rating: </span>{vote_average}</p>
              <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
              <span href="#" className="text-dark-gray dark:text-light-gray">{vote_count} reviews</span>
            </div>
            <p className="py-1" id="runtime">
              <span className="font-bold mr-3">Runtime:</span>
              {runtime} minutes
            </p>
            <p id="released">
              <span className="font-bold mr-3">Released:</span>
              {`${month} ${date.getDate()}, ${date.getFullYear()}`}
            </p>
            <p className="py-1" id="budget">
              <span className="font-bold mr-5.45">Budget:</span>
              {USDollar.format(budget)}
            </p>
            <p id="revenue">
              <span className="font-bold mr-3.5">Revenue:</span>
              {USDollar.format(revenue)}
            </p>
            <p className="pt-1" id="imdb">
              <span className="font-bold mr-4">IMDB Id:</span>
              <a className="text-hover-blue dark:text-hover-yellow" href={`https://www.imdb.com/title/${imdb_id}/`} target="_blank" rel="noreferrer">{imdb_id}</a>
            </p>
          </div>

        </div>
      </section>
    </main>
  )
}
