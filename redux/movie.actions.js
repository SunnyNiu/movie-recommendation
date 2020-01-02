import request from 'superagent'
import { searchMovie } from './movie.types'
import * as api from '../client/api/recommendedMovies'

export function showMovie (movie) {
  return {
    type: searchMovie.NEXT_MOVIE,
    movie: movie
  }
}

export function movies (movies) {
  return {
    type: searchMovie.SHOW_MOVIES,
    movies: movies
  }
}

// async
export function fetchMovieCreator (moviesId) {
  return function (dispatch) {
    return request
      .get(`/movie?moviesId=${moviesId.join(',')}`)
      .then((res) => dispatch(showMovie(res.body)))
  }
}

export function likeMovieCreator (name) {
  return {
    type: searchMovie.LIKE_MOVIE,
    name: name
  }
}

// async
export function fetchMovieGenresByMovieIdCreator (movieId) {
  return function (dispatch) {
    return request
      .get(`/movieGenres/${movieId}`)
      .then(res => res.body)
      .then((body) => dispatch(likeMovieCreator(body))
      )
  }
}

export function fetchRecommendMoviesCreator (likedMovies) {
  return function (dispatch) {
    return api.getRecommendedMovies(likedMovies)
      .then(body => dispatch(movies(body.Similar.Results)))
  }
}

export const clearAll = () => ({
  type: searchMovie.CLEAR_ALLSTATE
})
