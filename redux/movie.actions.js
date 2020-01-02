import request from 'superagent'
import { searchMovie } from './movie.types'

export function showMovie (movie) {
  return {
    type: searchMovie.NEXT_MOVIE,
    movie: movie
  }
}

// async
export function fetchMovie (moviesId) {
  return function (dispatch) {
    return request
      .get(`/movie?moviesId=${moviesId.join(',')}`)
      .then((res) => dispatch(showMovie(res.body)))
  }
}

export function likeMovie (genres) {
  return {
    type: searchMovie.LIKE_MOVIE,
    genres
  }
}

// async
export function fetchMovieGenresByMovieId (movieId) {
  return function (dispatch) {
    return request
      .get(`/movieGenres/${movieId}`)
      .then(res => res.body)
      .then((body) => dispatch(likeMovie(body))
      )
  }
}

// async
export function fetchRecommendMoviesNotInShowedBefore (genre, moviesId) {
  const moviesIds = moviesId.join(',')
  return function (dispatch) {
    return request
      .get(`/recommendation/${genre}/${moviesIds}`)
      .then(resp => resp.body)
      .then((body) => {
        dispatch(showMovie(body))
      })
  }
}

export const clearAll = () => ({
  type: searchMovie.CLEAR_ALLSTATE
})
