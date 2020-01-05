const request = require('supertest')

const server = require('../server/server')

const mockGetMovieById = { id: 2, name: 'Test2', image: './image1.png' }

jest.mock('../db/db', () => ({
  getMovieById: (movieId) => Promise.resolve(mockGetMovieById)
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
