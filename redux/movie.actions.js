import { searchMovie } from './movie.types'

function updateMovieId (movie) {
  return {
    type: searchMovie.NEXT_MOVIE,
    movie: movie
  }
}

// async
export function fetchMovie () {
  return function (dispatch) {
    return fetch('/movie')
      .then(resp => resp.json())
      .then((body) => { console.log('body', body); dispatch(updateMovieId(body)) })
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
      .then(resp => resp.json())
      .then((body) => (
        `${option}` === 'like' ? dispatch(likeMovie(body)) : dispatch(dislikeMovie(body))
      ))
  }
}

// async
export function fetchRecommendMovies (genre) {
  // console.log('option', option)
  return function (dispatch) {
    return fetch(`/recommendation/${genre}`)
      .then(resp => resp.json())
      .then((body) => (
        dispatch(updateMovieId(body))
      ))
  }
}
