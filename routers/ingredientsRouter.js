const router = require('express').Router()
const db = require('../knex functions/db-helper')


router.get('/', (req, res) => {
    db.getIngredients()
    .then(ing => {
        res.status(200).json(ing)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({Error: "There was an error getting ingredients."})
    })
})


router.get('/:id/recipes', (req, res) => {
    const { id } = req.params
    db.getRecipesForIngredient(id)
    .then(recipes => {
        res.status(200).json(recipes)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({Error: "There was a problems getting recipes for this ingredient"})
    })
})

module.exports = router