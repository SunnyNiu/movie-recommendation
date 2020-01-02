const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getMovieById,
  getGenresId,
  getGenresByIds,
  getGenresIdByGenre,
  getMovieIdByGenreId,
  getMovieIdByGenreIdNotIncludedBefore,
  getGenresByMovieId,
  getMoviesByChosenTypes,
  getMoviesByIds
}

function getGenresIdByGenre (genre, db = connection) {
  return db('genres').where('type', genre).select()
}

function getMovieById (movieId, db = connection) {
  return db('movies').where('id', movieId).select().first()
}

function getMoviesByIds (moviesId, db = connection) {
  return db('movies').where('id', 'in', moviesId).select('name')
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

function getGenresByMovieId (movieId, db = connection) {
  return db('movies_genres')
    .join('genres', 'genres.id', 'movies_genres.genre_id')
    .where('movies_genres.movie_id', movieId)
    .select('genres.id as id', 'genres.type as type')
}

function getMoviesByChosenTypes (genre, moviesId, db = connection) {
  return db('movies_genres')
    .join('genres', 'genres.id', 'movies_genres.genre_id')
    .join('movies', 'movies.id', 'movies_genres.movie_id')
    .where('genres.type', genre)
    .whereNotIn('movies_genres. movie_id', moviesId)
    .select('movies.id as id', 'movies.name as name', 'movies.image as image')
    .first()
}
