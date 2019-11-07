const knex = require('../data/db-config')


// ===== GET FUNCTIONS ===== //

const findRecipe = () => {
    return knex.select('*').from('recipe')
}

const findRecipeById = (id) => {
    return knex.select('*').from('recipe')
    .where('recipe.id', id)
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


// ===== POST FUNCTIONS ===== //

const addRecipe = data => {
    return knex('recipe')
    .insert(data)
}

const addRecipeIngredient = (data, id) => {
    return knex('recipe_ingredient')
    .insert({...data, recipe_id: id})
}

module.exports = { addRecipeIngredient, addRecipe, findRecipeById, findRecipe, getShoppingList, getInstructions, getRecipesForIngredient, getIngredients}