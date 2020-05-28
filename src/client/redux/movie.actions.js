import { searchMovie } from './movie.types';
import * as api from '../api/recommendedMovies';

export function showMovie(movie) {
  return {
    type: searchMovie.NEXT_MOVIE,
    movie,
  };
}

// eslint-disable-next-line no-shadow
export function movies(movies) {
  return {
    type: searchMovie.SHOW_MOVIES,
    movies,
  };
}

// async
export function fetchMovieCreator(moviesId) {
  // eslint-disable-next-line func-names
  return function (dispatch) {
    return (
      api
        .getMoviesByIds(moviesId)
        // eslint-disable-next-line no-shadow
        .then((movies) => dispatch(showMovie(movies)))
    );
  };
}

export function likeMovieCreator(name) {
  return {
    type: searchMovie.LIKE_MOVIE,
    name,
  };
}

export function fetchRecommendMoviesCreator(likedMovies) {
  // eslint-disable-next-line func-names
  return function (dispatch) {
    return api
      .getRecommendedMovies(likedMovies)
      .then((body) => dispatch(movies(body.Similar.Results)));
  };
}

export const clearAll = () => ({
  type: searchMovie.CLEAR_ALLSTATE,
});
