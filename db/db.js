const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getGenres,
  getMovieById,
  getGenreId,
  getGenres
}

function getGenres (db = connection) {
  return db('genres').select()
}

function getMovieById (cardId, db = connection) {
  return db('movies').where('id', cardId).select()
}

function getGenreId (movieId, db = connection) {
  return db('movies_genres').where('movie_id', movieId).select()
}

function getGenres (genreIds, db = connection) {
  return db('genres').where('id', 'in', genreIds).select()
}
