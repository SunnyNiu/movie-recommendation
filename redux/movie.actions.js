import { searchMovie } from './movie.types'
import request from 'superagent'

function updateMovieId (movie) {
  return {
    type: searchMovie.NEXT_MOVIE,
    movie: movie
  }
}

// export function fetchMovie () {
//   return function (dispatch) {
//     return request.get('http://localhost:3000/movie')
//       .then(resp => resp.json())
//       .then((body) => { console.log('body', body); dispatch(updateMovieId(body)) })
//   }
// }

export function fetchMovie () {
  return (dispatch) => {
    request
      .get(`/movie`)
      .end((err, res) => {
        console.log('action', res.json())
        if (err) {
          console.log(err)
        }
        dispatch(updateMovieId(res.json()))
      })
  }
}
