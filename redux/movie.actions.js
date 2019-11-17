import { searchMovie } from './movie.types'
import request from 'superagent'

function updateMovieId (movie) {
  return {
    type: searchMovie.NEXT_MOVIE,
    movie: movie
  }
}

export function fetchMovie () {
  return function (dispatch) {
    return fetch('http://localhost:3000/movie')
      .then(resp => resp.json())
      .then((body) => { console.log('body', body); dispatch(updateMovieId(body)) })
  }
}
