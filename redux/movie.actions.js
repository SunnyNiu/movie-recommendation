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

// async
export function fetchMovieGenresByMovieId (movieId) {
  console.log('movieId', movieId)
  return function (dispatch) {
    return fetch(`/movieGeneres/${movieId}`)
      .then(resp => resp.json())
      .then((body) => dispatch(likeMovie(body)))
  }
}
