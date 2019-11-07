const knex = require('../data/db-config')

const findRecipe = () => {
    return knex.select('*').from('recipe')
}

const getShoppingList = (id) => {
    return knex.select('*')
    .from('recipe_ingredient')
    .where('recipe_id', id)
}

const getInstructions = (id) => {
    return knex.select('*')
    .from('recipe_step')
    .where('recipe_id', id)
}

const getRecipesForIngredient = (id) => {
    return knex('recipe')
    .join('recipe_ingredient', 'recipe_ingredient.recipe_id', '=', 'recipe.id')
    .select('recipe.*')
    .where('recipe_ingredient.ingredient_id', id)
}

const getIngredients = () => {
    return knex.select('*').from('ingredient')
}


module.exports = { findRecipe, getShoppingList, getInstructions, getRecipesForIngredient, getIngredients}