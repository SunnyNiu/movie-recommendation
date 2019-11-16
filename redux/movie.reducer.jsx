import { searchMovie } from './movie.types'

const initialState = {
  movie: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case searchMovie.NEXT_MOVIE:
      return {
        ...state,
        movie: action.movie
      }
    default:
      return state
  }
}
