const path = require('path')
const express = require('express')
const db = require('../db/db')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

function getRandomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

server.get('/movie', (req, res) => {
  const moviesId = req.query.moviesId ? req.query.moviesId.split(',').map(item => parseInt(item, 10)) : []

  let id = getRandomInt(1, 80)
  while (moviesId.includes(id)) {
    id = getRandomInt(1, 80)
  }

  db.getMovieById(id)
    .then(movie => res.json(movie))
    .catch(err => {
      res.status(500).send('DATABASE ERROR:' + err.message)
    })
})

server.get('/movieGenres/:movieId', (req, res) => {
  const movieId = Number(req.params.movieId)
  db.getGenresByMovieId(movieId)
    .then(movieTypes => res.json(movieTypes))
    .catch(err => {
      res.status(500).send('DATABASE ERROR:' + err.message)
    })
})

server.get('/recommendation/:genre/:moviesId', (req, res) => {
  const genre = req.params.genre
  const moviesId = req.params.moviesId.split(',')
  db.getGenresIdByGenre(genre)
    .then(genreType => {
      db.getMovieIdByGenreIdNotIncludedBefore(genreType[0].id, moviesId)
        .then(moviesId => {
          db.getMovieById(moviesId[0].movie_id).then(movie => res.json(movie))
        })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR:' + err.message)
    })
})

module.exports = server
