import movieReducer from '../redux/movie.reducer'
import { searchMovie } from '../redux/movie.types'

describe('movieReducer tests', () => {
  it('nextmovie shows new movie', () => {
    const currentState = {
      movie: '',
      moviesId: [],
      likedMovies: [],
      movies: []
    }

    const movie = { id: 2, name: 'Iron man', image: './image2.png' }
    const action = {
      type: searchMovie.NEXT_MOVIE,
      movie: movie
    }
    const expected = {
      movie: { id: 2, name: 'Iron man', image: './image2.png' },
      moviesId: [2],
      likedMovies: [],
      movies: []
    }
    const actual = movieReducer(currentState, action)
    expect(actual).toEqual(expected)
  })

  it('likemovie that the genre will increase correctly', () => {
    const currentState = {
      movie: { id: 2, name: 'Iron man', image: './image2.png' },
      moviesId: [3],
      likedMovies: [],
      movies: []
    }

    const action = {
      type: searchMovie.LIKE_MOVIE,
      name: 'Iron man'
    }
    const expected = {
      movie: { id: 2, name: 'Iron man', image: './image2.png' },
      moviesId: [3],
      likedMovies: ['Iron man'],
      movies: []
    }
    const actual = movieReducer(currentState, action)
    expect(actual).toEqual(expected)
  })

  it('showmovies that show recommended movies', () => {
    const currentState = {
      movie: { id: 2, name: 'Iron man', image: './image2.png' },
      moviesId: [3],
      likedMovies: [2],
      movies: []
    }

    const action = {
      type: searchMovie.SHOW_MOVIES,
      movies: [{ 'name': 'Iron Man' }, { 'name': 'Coco' }]
    }
    const expected = {
      movie: { id: 2, name: 'Iron man', image: './image2.png' },
      moviesId: [3],
      likedMovies: [2],
      movies: [[{ 'name': 'Iron Man' }, { 'name': 'Coco' }]]
    }
    const actual = movieReducer(currentState, action)
    expect(actual).toEqual(expected)
  })

  it('clearall state works well', () => {
    const currentState = {
      movie: { id: 3, name: 'A Quiet Place Part II', image: './image3.png' },
      moviesId: [2],
      likedMovies: [2],
      movies: [{ 'name': 'The Incredible Hulk' }, { 'name': 'Iron man' }]
    }

    const action = {
      type: searchMovie.CLEAR_ALLSTATE
    }

    // expected status is same as initialSate in reducer
    const initialState = {
      movie: '',
      moviesId: [],
      likedMovies: [],
      movies: []
    }
    const actual = movieReducer(currentState, action)
    expect(actual).toEqual(initialState)
  })
})
