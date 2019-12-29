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
    const scope = nock('http://localhost')
      .get("/movie?moviesId='2,4'")
      .reply(200, [
        { id: 1, name: 'test user 2', email: 'test2@user.nz' },
        { id: 2, name: 'test user 4', email: 'test4@user.nz' }
      ])

    const dispatch = jest.fn()
    fetchMovie('2,4')(dispatch)
      .then(() => console.log(dispatch.mock.calls))
  })
})
