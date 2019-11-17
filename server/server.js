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

server.get('/movieGeneres/:movieId', (req, res) => {
  const array = []
  const movieId = Number(req.params.movieId)
  db.getMovieById(movieId)
    .then(x =>
      db.getGenreId(x[0].id)
        .then(y => { y.map(genre => array.push(genre['genre_id'])) })
        .then(() => db.getGenres(array).then(z => res.json(z)))
    )
    .catch(err => {
      res.status(500).send('DATABASE ERROR:' + err.message)
    })
})

// server.get('/recommend', (req, res) => {
//   const array = []
//   db.getGenresMovie(movieId)
//     .then(x =>
//       db.getGenreId(x[0].id)
//         .then(y => { y.map(genre => array.push(genre['genre_id'])) })
//         .then(() => db.getGenres(array).then(z => res.json(z)))
//     )
//     .catch(err => {
//       res.status(500).send('DATABASE ERROR:' + err.message)
//     })
// })

module.exports = server
