import { searchMovie } from './movie.types'

function showMovie (movie) {
  return {
    type: searchMovie.NEXT_MOVIE,
    movie: movie
  }
}

// async
export function fetchMovie (moviesId) {
  return function (dispatch) {
    return fetch(`/movie?moviesId=${moviesId.join(',')}`)
      .then(res => res.json())
      .then((body) => dispatch(showMovie(body)))
  }
}

function likeMovie (genres) {
  return {
    type: searchMovie.LIKE_MOVIE,
    genres
  }
}

function dislikeMovie (genres) {
  return {
    type: searchMovie.DISLIKE_MOVIE,
    genres
  }
}

// async
export function fetchMovieGenresByMovieId (movieId, option) {
  return function (dispatch) {
    return fetch(`/movieGenres/${movieId}`)
      .then(res => res.json())
      .then((body) => (
        `${option}` === 'like' ? dispatch(likeMovie(body)) : dispatch(dislikeMovie(body))
      ))
  }
}

// async
export function fetchRecommendMoviesNotInShowedBefore (genre, moviesId) {
  const moviesIds = moviesId.join(',')
  return function (dispatch) {
    return fetch(`/recommendation/${genre}/${moviesIds}`)
      .then(resp => resp.json())
      .then((body) => {
        dispatch(showMovie(body[0]))
      })
  }
}

export const clearAll = () => ({
  type: searchMovie.CLEAR_ALLSTATE
})
