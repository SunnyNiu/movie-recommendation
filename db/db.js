const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getMovieById,
  getGenresId,
  getGenresByIds,
  getGenresIdByGenre,
  getMovieIdByGenreId,
  getMovieIdByGenreIdNotIncludedBefore
}

function getGenresIdByGenre (genre, db = connection) {
  return db('genres').where('type', genre).select()
}

function getMovieById (movieId, db = connection) {
  return db('movies').where('id', movieId).select().first()
}

function getMovieIdByGenreId (genreId, db = connection) {
  return db('movies_genres').where('genre_id', genreId).select()
}

function getMovieIdByGenreIdNotIncludedBefore (genreId, movieIds, db = connection) {
  return db('movies_genres').where('genre_id', genreId).whereNotIn('movie_id', movieIds).select()
}

function getGenresId (movieId, db = connection) {
  return db('movies_genres').where('movie_id', movieId).select()
}

function getGenresByIds (genreIds, db = connection) {
  return db('genres').where('id', 'in', genreIds).select()
}
