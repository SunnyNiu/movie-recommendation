import { searchMovie } from './movie.types'

const initialState = {
  movie: '',
  genres: {
    Action: 0,
    Adventure: 0,
    Animation: 0,
    Biography: 0,
    Comedy: 0,
    Crime: 0,
    Drama: 0,
    Family: 0,
    Fantasy: 0,
    FilmNoir: 0,
    History: 0,
    Horror: 0,
    Music: 0,
    Musical: 0,
    Mystery: 0,
    Romance: 0,
    SciFi: 0,
    Sport: 0,
    Thriller: 0
  },
  moviesId: []
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
      action.genres.forEach(genre => {
        state.genres[genre.type] = state.genres[genre.type] + 1
      })

      return {
        ...state,
        genres: state.genres
      }
    case searchMovie.DISLIKE_MOVIE:
      action.genres.forEach(genre => {
        state.genres[genre.type] = state.genres[genre.type] - 1
      })

      return {
        ...state,
        genres: state.genres
      }
    case searchMovie.CLEAR_ALLSTATE:
      return initialState

    default:
      return state
  }
}
