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
  db.getMovieById(getRandomInt(1, 32))
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
      console.log('x', x)
      db.getMovieIdByGenreId(x[0].id)
        .then(y => db.getMovieById(y[0].movie_id))
        .then(z => { console.log('z', z); res.json(z) })
    }
    )
    .catch(err => {
      res.status(500).send('DATABASE ERROR:' + err.message)
    })
})

module.exports = server
