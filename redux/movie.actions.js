import { searchMovie } from './movie.types'

function updateMovieId (movie) {
  return {
    type: searchMovie.NEXT_MOVIE,
    movie: movie
  }
}

export function fetchMovie () {
  return function (dispatch) {
    return fetch('/movie')
      .then(resp => resp.json())
      .then((body) => { console.log('body', body); dispatch(updateMovieId(body)) })
  }
}
