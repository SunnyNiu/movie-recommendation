const request = require('superagent')
const express = require('express')
const db = require('../db/db')

const router = express.Router()
router.use(express.json())

const url = 'https://tastedive.com/api/similar?q='
const APIKey = '352362-MovieRec-XIQL1KMA'

function getRandomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

router.get('/movie', (req, res) => {
  const moviesId = req.query.moviesId ? req.query.moviesId.split(',').map(item => parseInt(item, 10)) : []

  let id = getRandomInt(1, 90)
  while (moviesId.includes(id)) {
    id = getRandomInt(1, 90)
  }

  db.getMovieById(id)
    .then(movie => res.json(movie))
    .catch(err => {
      res.status(500).send('DATABASE ERROR:' + err.message)
    })
})

router.get('/movies/:moviesId', (req, res) => {
  const moviesId = req.params.moviesId
  db.getMoviesByIds(moviesId)
    .then(names => res.json(names))
    .catch(err => {
      res.status(500).send('DATABASE ERROR:' + err.message)
    })
})

router.get('/recommendmovies/:likedmovies', (req, res) => {
  const likedmovies = req.params.likedmovies
  request
    .get(`${url}${likedmovies}&info=1&type=movie&verbose=1&k=${APIKey}`)
    .end((err, result) => {
      if (err) {
        res.status(500).send(err.message)
      } else {
        res.json(result.body)
      }
    })
})

module.exports = router
