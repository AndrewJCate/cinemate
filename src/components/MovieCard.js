import { Link } from "react-router-dom";
import DefaultImage from "../assets/images/movie-poster.jpg";

export const MovieCard = ({movie}) => {

  const BASE_IMG_URL = "http://image.tmdb.org/t/p/w500";
  const {id, title, overview, poster_path} = movie;
  const IMAGE_PATH = (poster_path) ? BASE_IMG_URL + poster_path : DefaultImage;

  return (
      <div className="max-w-sm bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-medium-gray">
          <Link to={`/movie/${id}`}>
              <img className="rounded-t-lg max-h-sm" src={IMAGE_PATH} alt={`${title} poster`} />
          </Link>
          <div className="p-5">
              <Link to={`/movie/${id}`}>
                  <h5 className="mb-3 text-2xl font-bold tracking-tight text-dark-gray dark:text-light-gray">{title}</h5>
              </Link>
              <p className="font-normal text-medium-gray dark:text-gray-400">{overview}</p>
          </div>
    </div>
  )
}
