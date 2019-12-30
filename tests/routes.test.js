const request = require('supertest')

const server = require('../server/server')

const mockGetGenresIdByGenre = [{
  id: 1,
  type: 'Action'
}, {
  id: 2,
  type: 'Adventure'
}]

const mockGetMovieById = { id: 2, name: 'Test2', image: './image1.png' }

const mockGetMovieIdByGenreId = [
  { id: 4, movie_id: 3, genre_id: 2 }
]

const mockGetMovieIdByGenreIdNotIncludedBefore = [
  { id: 4, movie_id: 3, genre_id: 2 }
]

const mockGetGenresId = [
  { id: 4, movie_id: 3, genre_id: 2 },
  { id: 6, movie_id: 3, genre_id: 6 }
]

const mockGetGenresByIds = [
  { id: 4, type: 'Biography' },
  { id: 6, type: 'SciFi' }
]

jest.mock('../db/db', () => ({
  getGenresIdByGenre: (genre) => Promise.resolve(mockGetGenresIdByGenre),
  getMovieById: (movieId) => Promise.resolve(mockGetMovieById),
  getMovieIdByGenreId: (genreId) => Promise.resolve(mockGetMovieIdByGenreId),
  getMovieIdByGenreIdNotIncludedBefore: (genreId, movieIds) => Promise.resolve(mockGetMovieIdByGenreIdNotIncludedBefore),
  getGenresId: (movieId) => Promise.resolve(mockGetGenresId),
  getGenresByIds: (genreIds) => Promise.resolve(mockGetGenresByIds)
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
        expect(res.body).toEqual(mockGetGenresByIds)
      })
  })
})

describe('get recommended movie base on choosed movies', () => {
  it('GET /recommendation/:genre/:moviesId', () => {
    return request(server)
      .get('/recommendation/4/2')
      .then((res) => {
        expect(res.body).toEqual(mockGetMovieById)
      })
  })
})
