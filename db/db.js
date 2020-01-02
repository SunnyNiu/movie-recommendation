const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getMovieById,
  getMoviesByIds
}

function getMovieById (movieId, db = connection) {
  return db('movies').where('id', movieId).select().first()
}

function getMoviesByIds (moviesId, db = connection) {
  return db('movies').where('id', 'in', moviesId).select('name')
}
