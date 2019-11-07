const router = require('express').Router()
const db = require('../knex functions/db-helper')

router.get('/', (req, res) => {
    db.findRecipe()
    .then(recipes => {
        res.status(200).json(recipes)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({Error: "There was a problem retrieving the recipes."})
    })
})

router.get('/:id/shoppingList', (req, res) => {
    const { id } = req.params
    db.getShoppingList(id)
    .then(list => {
        res.status(200).json(list)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({Error: "Error retrieving shopping list."})
    }) 
})

router.get('/:id/instructions', (req, res) => {
    const { id } = req.params
    db.getInstructions(id)
    .then(instructions => [
        res.status(200).json(instructions)
    ])
    .catch(err => {
        console.log(err)
        res.status(500).json({Error: "There was an error retrieving instructions for this recipe."})
    })
})

module.exports = router 