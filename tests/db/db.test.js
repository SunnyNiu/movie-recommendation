const env = require('./test-environment')
const db = require('../../db/db')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

describe('movies database tests', () => {
  it('getMovieById returns the correct movie', () => {
    expect.assertions(1)

    const movieId = '2'
    const expected = {
      id: 2,
      name: 'The Incredible Hulk',
      image: '/images/2.png'
    }

    return db.getMovieById(movieId, testDb)
      .then(actual =>
        expect(actual).toEqual(expected)
      )
  })
})
