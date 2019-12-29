import movieReducer from '../redux/movie.reducer'
import { searchMovie } from '../redux/movie.types'

describe('movieReducer tests', () => {
  it('nextmovie shows new movie', () => {
    const currentState = {
      movie: '',
      genres: {
        Action: 0,
        Adventure: 0,
        Animation: 0,
        Biography: 0
      },
      moviesId: []
    }

    const movie = { id: 2, name: 'Iron man', image: './image2.png' }
    const action = {
      type: searchMovie.NEXT_MOVIE,
      movie: movie
    }
    const expected = {
      movie: { id: 2, name: 'Iron man', image: './image2.png' },
      genres: {
        Action: 0,
        Adventure: 0,
        Animation: 0,
        Biography: 0
      },
      moviesId: [2]
    }
    const actual = movieReducer(currentState, action)
    expect(actual).toEqual(expected)
  })

  it('likemovie that the genre will increase correctly', () => {
    const currentState = {
      movie: { id: 2, name: 'Iron man', image: './image2.png' },
      genres: {
        Action: 1,
        Adventure: 0,
        Animation: 0,
        Biography: 0,
        SciFi: 0,
        Horror: 0,
        Thriller: 0
      },
      moviesId: [3]
    }

    const genres = [{ id: 1, type: 'Action' }, { id: 2, type: 'Adventure' }, { id: 5, type: 'SciFi' }]
    const action = {
      type: searchMovie.LIKE_MOVIE,
      genres: genres
    }
    const expected = {
      movie: { id: 2, name: 'Iron man', image: './image2.png' },
      genres: {
        Action: 2,
        Adventure: 1,
        Animation: 0,
        Biography: 0,
        SciFi: 1,
        Horror: 0,
        Thriller: 0
      },
      moviesId: [3]
    }
    const actual = movieReducer(currentState, action)
    expect(actual).toEqual(expected)
  })

  it('dislikemovie that the genre will reduce 1 correctly', () => {
    const currentState = {
      movie: { id: 3, name: 'A Quiet Place Part II', image: './image3.png' },
      genres: {
        Action: 1,
        Adventure: 0,
        Animation: 0,
        Biography: 0,
        Horror: 0,
        SciFi: 0,
        Thriller: 0
      },
      moviesId: [2]
    }

    const genres = [{ id: 6, type: 'Horror' }, { id: 7, type: 'Thriller' }]
    const action = {
      type: searchMovie.DISLIKE_MOVIE,
      genres: genres
    }
    const expected = {
      movie: { id: 3, name: 'A Quiet Place Part II', image: './image3.png' },
      genres: {
        Action: 1,
        Adventure: 0,
        Animation: 0,
        Biography: 0,
        Horror: -1,
        SciFi: 0,
        Thriller: -1
      },
      moviesId: [2]
    }
    const actual = movieReducer(currentState, action)
    expect(actual).toEqual(expected)
  })

  it('clearall state works well', () => {
    const currentState = {
      movie: { id: 3, name: 'A Quiet Place Part II', image: './image3.png' },
      genres: {
        Action: 1,
        Adventure: 0,
        Animation: 0,
        Biography: 0,
        Horror: 0,
        SciFi: 0,
        Thriller: 0
      },
      moviesId: [2]
    }

    const action = {
      type: searchMovie.CLEAR_ALLSTATE
    }

    // expected status is same as initialSate in reducer
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
    const actual = movieReducer(currentState, action)
    expect(actual).toEqual(initialState)
  })
})
