const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  // getGenres,
  getMovieById,
  getGenreId,
  getGenresById,
  getGenresIdByGenre,
  getMovieIdByGenreId,
  getMovieIdByGenreIdNotIncludedBefore
}

function getGenresIdByGenre (genre, db = connection) {
  return db('genres').where('type', genre).select()
}

function getMovieById (cardId, db = connection) {
  return db('movies').where('id', cardId).select()
}

function getMovieIdByGenreId (genreId, db = connection) {
  return db('movies_genres').where('genre_id', genreId).select()
}

function getMovieIdByGenreIdNotIncludedBefore (genreId, movieIds, db = connection) {
  return db('movies_genres').where('genre_id', genreId).whereNotIn('movie_id', movieIds).select()
}

function getGenreId (movieId, db = connection) {
  return db('movies_genres').where('movie_id', movieId).select()
}

function getGenresById (genreIds, db = connection) {
  return db('genres').where('id', 'in', genreIds).select()
}
