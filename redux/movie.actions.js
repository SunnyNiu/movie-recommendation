function updateMovieId (text) {
  return {
    type: 'Next_Movie',
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
