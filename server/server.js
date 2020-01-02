const path = require('path')
const express = require('express')
const cors = require('cors')

const movieRoutes = require('./movies')
const server = express()

server.use(express.static(path.join(__dirname, './public')))
server.use(cors())
server.use('/', movieRoutes)

module.exports = server
