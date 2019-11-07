const express = require('express')
const server = express()

const helmet = require('helmet')
const cors = require('cors')

server.use(helmet())
server.use(cors())
server.use(express.json())

const recipeRouter = require('./routers/recipesRouter')
server.use('/api/recipes', recipeRouter)

const ingredientRouter = require('./routers/ingredientsRouter')
server.use('/api/ingredients', ingredientRouter)


module.exports = server 