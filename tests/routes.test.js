const request = require('supertest')

const server = require('../server/server')

const mockGetMovieById = { id: 2, name: 'Test2', image: './image1.png' }

const mockGetMoviesByIds = [{ name: 'Iron Man' }, { name: 'Thor' }, { name: 'The Incredible Hulk' }]

jest.mock('../db/db', () => ({
  getMovieById: (movieId) => Promise.resolve(mockGetMovieById),
  getMoviesByIds: (moviesId) => Promise.resolve(mockGetMoviesByIds)
}))

describe('get random movie', () => {
  it('GET /movie', () => {
    return request(server)
      .get('/movie')
      .then((res) => {
        expect(res.body).toEqual(mockGetMovieById)
      })
  })

  it('GET /movies/:moviesId', () => {
    return request(server)
      .get('/movies/1,2,3')
      .then((res) => {
        expect(res.body).toEqual(mockGetMoviesByIds)
      })
  })
})
