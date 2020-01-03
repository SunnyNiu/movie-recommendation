import nock from 'nock'
const { getRecommendedMovies, getMoviesByIds } = require('../client/api/recommendedMovies')

const apiUrl = 'http://localhost'

describe('apis tests', () => {
  it('getMoviesByIds return a response object with correct movies', () => {
    const expected = [{ name: 'Iron Man' }, { name: 'The Incredible Hulk' }]

    const moviesId = [2, 3]

    nock(apiUrl)
      .get(`/movie?moviesId=${moviesId.join(',')}`)
      .reply(200, expected)

    return getMoviesByIds(moviesId)
      .then(names => {
        expect(names).toEqual(expected)
      })
  })

  it('getRecommendedMovie return a correct movies', () => {
    const expected = [{ name: 'Iron Man' }, { name: 'The Incredible Hulk' }]

    const movies = ['Thor', 'Logan']
    const moviesJoinWithComma = movies.join(',')

    nock(apiUrl)
      .get(`/recommendmovies/${moviesJoinWithComma}`)
      .reply(200, expected)

    return getRecommendedMovies(movies)
      .then(movies => {
        expect(movies).toEqual(expected)
      })
  })
})
