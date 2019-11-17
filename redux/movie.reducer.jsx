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
    Thriller: 0,
    War: 0,
    Western: 0
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case searchMovie.NEXT_MOVIE:
      return {
        ...state,
        movie: action.movie
      }
    case searchMovie.LIKE_MOVIE:
      const newGenres = {
        ...state.genres
      }
      action.genres.forEach(genre => {
        newGenres[genre.type] = newGenres[genre.type] + 1
      })

      return {
        ...state,
        genres: newGenres
      }
    case searchMovie.DISLIKE_MOVIE:
      const dislikeGenres = {
        ...state.genres
      }
      action.genres.forEach(genre => {
        dislikeGenres[genre.type] = dislikeGenres[genre.type] - 1
      })

      return {
        ...state,
        genres: dislikeGenres
      }
    default:
      return state
  }
}
