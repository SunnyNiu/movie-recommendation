const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[environment];
const connection = require('knex')(config);

function getMovieById(movieId, db = connection) {
  return db('movies').where('id', movieId).select().first();
}

module.exports = {
  getMovieById,
};
