import {
  showMovie,
  fetchMovie,
  likeMovie,
  dislikeMovie,
  fetchMovieGenresByMovieId,
  fetchRecommendMoviesNotInShowedBefore,
  clearAll

} from '../redux/movie.actions'

import { searchMovie } from '../redux/movie.types'
import nock from 'nock'

describe('action tests', () => {
  it('showMovie return movie', () => {
    const movie = { id: '1', name: 'Joker (I) (2019)', image: '../images/1.png' }
    const expected = {
      type: searchMovie.NEXT_MOVIE,
      movie: movie
    }

    const actual = showMovie(movie)
    expect(actual).toEqual(expected)
  })

  it('likeMovie returns liked genres', () => {
    const genres = [{ id: 5, type: 'Comedy' }, { id: 7, type: 'Drama' }]
    const expected = {
      type: searchMovie.LIKE_MOVIE,
      genres
    }

    const actual = likeMovie(genres)
    expect(actual).toEqual(expected)
  })

  it('dislikeMovie returns disliked genres', () => {
    const genres = [{ id: 4, type: 'Biography' }, { id: 7, type: 'Drama' }, { id: 11, type: 'History' }]
    const expected = {
      type: searchMovie.DISLIKE_MOVIE,
      genres
    }

    const actual = dislikeMovie(genres)
    expect(actual).toEqual(expected)
  })

  it('clearAll returns initial state', () => {
    const expected = {
      type: searchMovie.CLEAR_ALLSTATE
    }

    const actual = clearAll()
    expect(actual).toEqual(expected)
  })

  it('fetchMovie works well', () => {
    const expected = [{ id: 2, name: 'my name', image: '/images/2.png' }, { id: 3, name: 'toy story', image: '/images/4.png' }]
    const scope = nock('http://localhost')
      .get('/movie?moviesId=2,4')
      .reply(200, expected)

    const dispatch = jest.fn()
    return fetchMovie([2, 4])(dispatch)
      .then(() => {
        expect(dispatch.mock.calls.length).toBe(1)
        expect(dispatch.mock.calls[0][0].type).toBe('NEXT_MOVIE')
        expect(dispatch.mock.calls[0][0].movie).toEqual(expected)
        scope.done()
      })
  })

  it('fetchMovieGenresByMovieId works well with option like', () => {
    const expected = { genres: {
      Action: 1,
      Adventure: 1,
      Animation: 0,
      Biography: 0
    } }
    const scope = nock('http://localhost')
      .get('/movieGenres/2')
      .reply(200, expected)

    const dispatch = jest.fn()
    return fetchMovieGenresByMovieId(2, 'like')(dispatch)
      .then(() => {
        expect(dispatch.mock.calls.length).toBe(1)
        expect(dispatch.mock.calls[0][0].type).toBe('LIKE_MOVIE')
        expect(dispatch.mock.calls[0][0].genres).toEqual(expected)
        scope.done()
      })
  })

  it('fetchMovieGenresByMovieId works well with option dislike', () => {
    const expected = { genres: {
      Action: -1,
      Adventure: -1,
      Animation: 0,
      Biography: 0
    } }
    const scope = nock('http://localhost')
      .get('/movieGenres/2')
      .reply(200, expected)

    const dispatch = jest.fn()
    return fetchMovieGenresByMovieId(2, 'dislike')(dispatch)
      .then(() => {
        expect(dispatch.mock.calls.length).toBe(1)
        expect(dispatch.mock.calls[0][0].type).toBe('DISLIKE_MOVIE')
        expect(dispatch.mock.calls[0][0].genres).toEqual(expected)
        scope.done()
      })
  })

  it('fetchRecommendMoviesNotInShowedBefore works well', () => {
    const expected = { id: 2, name: 'Iron Man (2008)', image: '/images/2.png' }
    const scope = nock('http://localhost')
      .get('/recommendation/Action/2,4')
      .reply(200, [expected])

    const dispatch = jest.fn()
    return fetchRecommendMoviesNotInShowedBefore('Action', [2, 4])(dispatch)
      .then(() => {
        expect(dispatch.mock.calls.length).toBe(1)
        expect(dispatch.mock.calls[0][0].type).toBe('NEXT_MOVIE')
        expect(dispatch.mock.calls[0][0].movie).toEqual(expected)
        scope.done()
      })
  })
})
