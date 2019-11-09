const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getGenres,
  getMovieById
}

function getGenres (db = connection) {
  return db('genres').select()
}

function getMovieById (cardId, db = connection) {
  return db('movies').where('id', cardId).select()
}
