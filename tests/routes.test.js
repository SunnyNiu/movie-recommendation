const request = require('supertest')

const server = require('../server/server')

const mockGetMovieById = { id: 2, name: 'Test2', image: './image1.png' }

const mockGetMoviesByChosenTypes = { id: 1, name: 'Joker (I) (2019)', image: '/images/1.png' }

const mockGetGenresByMovieId = [
  { id: 4, type: 'Biography' },
  { id: 6, type: 'SciFi' }
]

jest.mock('../db/db', () => ({
  getMovieById: (movieId) => Promise.resolve(mockGetMovieById),
  getMoviesByChosenTypes: (genre, moviesId) => Promise.resolve(mockGetMoviesByChosenTypes),
  getGenresByMovieId: (genreIds) => Promise.resolve(mockGetGenresByMovieId)
}))

describe('get random movie', () => {
  it('GET /movie', () => {
    return request(server)
      .get('/movie')
      .then((res) => {
        expect(res.body).toEqual(mockGetMovieById)
      })
  })
})

describe('get movie genres by movieId', () => {
  it('GET /movieGenres/:movieId', () => {
    return request(server)
      .get('/movieGenres/3')
      .then((res) => {
        expect(res.body).toEqual(mockGetGenresByMovieId)
      })
  })
})

describe('get recommended movie base on choosed movies', () => {
  it('GET /recommendation/:genre/:moviesId', () => {
    return request(server)
      .get('/recommendation/Drama/35,34,49,79,61,8,39,42,63,57,46')
      .then((res) => {
        expect(res.body).toEqual(mockGetMoviesByChosenTypes)
      })
  })
})
