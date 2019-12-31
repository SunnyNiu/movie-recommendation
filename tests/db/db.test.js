const env = require('./test-environment')
const db = require('../../db/db')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

describe('movies database tests', () => {
  it('getGenresIdByGenre returns genre by genre', () => {
    expect.assertions(1)
    const expected = [{ id: 1, type: 'Action' }]

    return db.getGenresIdByGenre('Action', testDb)
      .then(actual =>
        expect(actual).toEqual(expected)
      )
  })

  it('getMovieById returns the correct movie', () => {
    expect.assertions(1)

    const movieId = '2'
    const expected = {
      id: 2,
      name: 'The Incredible Hulk (2008)',
      image: '/images/2.png'
    }

    return db.getMovieById(movieId, testDb)
      .then(actual =>
        expect(actual).toEqual(expected)
      )
  })

  it('getMovieIdByGenreId returns the correct movieId', () => {
    expect.assertions(1)

    const genreId = '6'
    const expected = [{ id: 3, movie_id: 1, genre_id: 6 }, { id: 6, movie_id: 2, genre_id: 6 }]

    return db.getMovieIdByGenreId(genreId, testDb)
      .then(actual =>
        expect(actual).toEqual(expected)
      )
  })

  it('getMovieIdByGenreIdNotIncludedBefore returns the correct movieId', () => {
    expect.assertions(1)

    const genreId = '6'
    const movieIds = [1, 4]
    const expected = [{ id: 6, movie_id: 2, genre_id: 6 }]

    return db.getMovieIdByGenreIdNotIncludedBefore(genreId, movieIds, testDb)
      .then(actual =>
        expect(actual).toEqual(expected)
      )
  })

  it('getGenresId returns the correct genresId by movieId', () => {
    expect.assertions(1)

    const movieId = 1
    const expected = [{ id: 1, movie_id: 1, genre_id: 1 },
      { id: 2, movie_id: 1, genre_id: 2 },
      { id: 3, movie_id: 1, genre_id: 6 }]

    return db.getGenresId(movieId, testDb)
      .then(actual =>
        expect(actual).toEqual(expected)
      )
  })

  it('getGenresByIds returns the correct genres', () => {
    expect.assertions(1)

    const genreIds = [ 5, 7 ]
    const expected = [ { id: 5, type: 'Comedy' },
      { id: 7, type: 'Thriller' }]

    return db.getGenresByIds(genreIds, testDb)
      .then(actual =>
        expect(actual).toEqual(expected)
      )
  })

  it('getGenresByMovieId returns the correct genres', () => {
    expect.assertions(1)

    const movieId = 3
    const expected = [ { id: 1, type: 'Action' },
      { id: 2, type: 'Adventure' },
      { id: 8, type: 'Fantasy' }
    ]

    return db.getGenresByMovieId(movieId, testDb)
      .then(actual =>
        expect(actual).toEqual(expected)
      )
  })

  it('getMoviesByChosedTypes returns the recommended movie', () => {
    expect.assertions(1)

    const moviesId = [3, 5, 1]
    const genre = 'Adventure'
    const expected = { id: 2, name: 'The Incredible Hulk (2008)', image: '/images/2.png' }

    return db.getMoviesByChosedTypes(genre, moviesId, testDb)
      .then(actual =>
        expect(actual[0]).toEqual(expected)
      )
  })
})
