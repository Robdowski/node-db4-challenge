const express = require('express')
const server = express()

const helmet = require('helmet')
const cors = require('cors')

server.use(helmet())
server.use(cors())
server.use(express.json())

const recipeRouter = require('./routers/recipesRouter')
server.use('/api/recipes', recipeRouter)


module.exports = { server }