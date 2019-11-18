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

server.get('/movie/:moviesId', (req, res) => {
  const moviesId = req.params.moviesId.split(',')
  const id = getRandomInt(1, 32)
  while (moviesId.includes(id)) {
    id = getRandomInt(1, 32)
  }

  db.getMovieById(id)
    .then(x => res.json(x[0]))
    .catch(err => {
      res.status(500).send('DATABASE ERROR:' + err.message)
    })
})

server.get('/movieGenres/:movieId', (req, res) => {
  const array = []
  const movieId = Number(req.params.movieId)
  db.getMovieById(movieId)
    .then(x =>
      db.getGenreId(x[0].id)
        .then(y => { y.map(genre => array.push(genre['genre_id'])) })
        .then(() => db.getGenresById(array).then(z => res.json(z)))
    )
    .catch(err => {
      res.status(500).send('DATABASE ERROR:' + err.message)
    })
})

server.get('/recommendation/:genre', (req, res) => {
  const genre = req.params.genre
  db.getGenresIdByGenre(genre)
    .then(x => {
      db.getMovieIdByGenreId(x[0].id)
        .then(y => db.getMovieById(y[0].movie_id))
        .then(z => { res.json(z) })
    }
    )
    .catch(err => {
      res.status(500).send('DATABASE ERROR:' + err.message)
    })
})

module.exports = server
