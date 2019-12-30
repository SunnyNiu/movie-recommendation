const request = require('supertest')

const server = require('../server/server')

const mockGetMovieById = { id: 2, name: 'Test2', image: './image1.png' }

const mockGetMoviesByChosedTypes = { id: 2, name: 'Test2', image: './image1.png' }

const mockGetGenresByMovieId = [
  { id: 4, type: 'Biography' },
  { id: 6, type: 'SciFi' }
]

jest.mock('../db/db', () => ({
  getMovieById: (movieId) => Promise.resolve(mockGetMovieById),
  getMoviesByChosedTypes: (genre, moviesId) => Promise.resolve(mockGetMoviesByChosedTypes),
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
      .get('/recommendation/4/2')
      .then((res) => {
        expect(res.body).toEqual(mockGetMoviesByChosedTypes)
      })
  })
})
