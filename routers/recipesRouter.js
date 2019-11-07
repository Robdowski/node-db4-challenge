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

module.exports = { router }