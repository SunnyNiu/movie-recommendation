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
      console.log('x', x)
      db.getMovieIdByGenreId(x[0].id)
        .then(y => {
          console.log('y', y)
          db.getMovieById(y[0].movie_id).then(z => { console.log('z', z); res.json(z) })
        })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR:' + err.message)
    })
})

server.get('/recommendation/:genre/:moviesId', (req, res) => {
  const genre = req.params.genre
  const moviesId = req.params.moviesId.split(',')
  db.getGenresIdByGenre(genre)
    .then(x => {
      console.log('xsssss', x)
      console.log('x[0].id', x[0].id)
      console.log('moviesId', moviesId)
      db.getMovieIdByGenreIdNotIncludedBefore(x[0].id, moviesId)
        .then(y => {
          console.log('yssss', y)

          db.getMovieById(y[0].movie_id).then(z => { console.log('zssss', z); res.json(z) })
        })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR:' + err.message)
    })
})

module.exports = server
