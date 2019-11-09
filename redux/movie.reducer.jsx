import { searchMovie } from './movie.types'

const initialState = {
  name: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case searchMovie.Next_Movie:
      return {
        ...state,
        name: action.name
      }
    default:
      return state
  }
}
