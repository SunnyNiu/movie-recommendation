const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000
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
  db.getMovieById(getRandomInt(1, 32)).then(x => res.json(x[0]))
})

server.listen(PORT, () => console.log(`Listening on port ${PORT}.`))
