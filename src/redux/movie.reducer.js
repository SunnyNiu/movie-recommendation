import { searchMovie } from './movie.types'

const initialState = {
  movie: '',
  moviesId: [],
  likedMovies: [],
  movies: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case searchMovie.NEXT_MOVIE:
      return {
        ...state,
        movie: action.movie,
        moviesId: [...state.moviesId, action.movie.id]
      }
    case searchMovie.LIKE_MOVIE:
      return {
        ...state,
        likedMovies: [...state.likedMovies, action.name]
      }
    case searchMovie.SHOW_MOVIES:
      return {
        ...state,
        movies: [...state.movies, action.movies]
      }
    case searchMovie.CLEAR_ALLSTATE:
      return initialState

    default:
      return state
  }
}
