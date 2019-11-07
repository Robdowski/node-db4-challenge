const knex = require('../data/db-config')

const findRecipe = () => {
    knex.select('*').from('recipe')
}


module.exports = { findRecipe, }