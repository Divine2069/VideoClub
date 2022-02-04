const express = require("express")
const router = express.Router()
const db = require('./db')
const fetch = require ('node-fetch')

router.get('/competitions', getCompetitions)



function getCompetitions(req, res) {
    db.getCompetitions().then(competitions => res.json(competitions))
}

module.exports = router
