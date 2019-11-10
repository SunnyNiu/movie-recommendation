import { searchMovie } from './movie.types'

const initialState = {
  name: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case searchMovie.NEXT_MOVIE:
      return {
        ...state,
        name: action.name,
        image: action.image,
        id: action.id
      }
    default:
      return state
  }
}
