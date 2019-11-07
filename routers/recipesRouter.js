const router = require('express').Router()
const db = require('../knex functions/db-helper')

/********** GET REQUESTS *************/
// GET RECIPES LIST
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

// GET RECIPE BY ID
router.get('/:id', (req, res) => {
    const { id } = req.params
    db.findRecipeById(id)
    .then(recipe => {
        res.status(200).json(recipe)
    })
    .catch(err => {
        res.status(500).json({Error: "There was a problem retrieving a recipe by that ID."})
    })
})

// GET INGREDIENTS LIST FOR THE RECIPE
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

// GET STEPS FOR THE RECIPE
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

/******************POST REQUESTS**********************/
router.post('/', (req, res) => {
    const { title } = req.body
    if(!title){
        res.status(400).json({Error: "Please include a title for your recipe."})
    }
    db.addRecipe(req.body)
    .then(recipe => {
        res.status(201).json(recipe)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({Error: "There was a problem creating the recipe."})
    })
})

router.post('/:id/ingredients', (req, res) =>{
    db.findRecipeById(req.params.id)
    .then(res => {
        if(!res){
            res.status(404).json({Error: "Not able to find a recipe with that Id."})
        } else {
            db.addRecipeIngredient(req.body, req.params.id)
            .then(ing => {
                res.status(201).json(ing)
            })
            .catch(err => {
                res.status(500).json({Error: "There was a problem creating that ingredient."})
            })
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({Error: "There was a problem with the request to the database."})
    })
})



module.exports = router 