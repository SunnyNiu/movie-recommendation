function updateMovieId (name, image, id) {
  return {
    type: 'NEXT_MOVIE',
    name,
    image,
    id
  }
}

export function fetchMovie () {
  return function (dispatch) {
    return fetch('/movie')
      .then(resp => resp.json())
      .then((body) => dispatch(updateMovieId(body.name, body.image, body.id))
      )
  }
}
