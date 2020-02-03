import { searchMovie } from './movie.types';
import * as api from '../api/recommendedMovies';

export function showMovie(movie) {
  return {
    type: searchMovie.NEXT_MOVIE,
    movie: movie,
  };
}

export function movies(movies) {
  return {
    type: searchMovie.SHOW_MOVIES,
    movies: movies,
  };
}

// async
export function fetchMovieCreator(moviesId) {
  return function(dispatch) {
    return api
      .getMoviesByIds(moviesId)
      .then(movies => dispatch(showMovie(movies)));
  };
}

export function likeMovieCreator(name) {
  return {
    type: searchMovie.LIKE_MOVIE,
    name: name,
  };
}

export function fetchRecommendMoviesCreator(likedMovies) {
  return function(dispatch) {
    return api
      .getRecommendedMovies(likedMovies)
      .then(body => dispatch(movies(body.Similar.Results)));
  };
}

export const clearAll = () => ({
  type: searchMovie.CLEAR_ALLSTATE,
});
