function updateMovieId (name) {
  return {
    type: 'NEXT_MOVIE',
    name
  }
}

export function fetchMovie () {
  return function (dispatch) {
    return fetch('/movie')
      .then(resp => resp.json())
      .then((body) => dispatch(updateMovieId(body.name))
      )
  }
}
