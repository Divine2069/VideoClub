'use strict'

const express = require('express')
const router = express.Router()
const db = require('./DB')
const fs = require('fs')

const fetch = require ('node-fetch')
const url = 'http://api.football-api.com/2.0/competitions?Authorization=565ec012251f932ea4000001fa542ae9d994470e73fdb314a8a56d76'


router.get('/', index)
router.get('/movies', getMovieByTitle)
//router.get('/movies/:movieName/filmes' , getMovieByTitle)


router.get('/teams' , getTeamsByCompetitionId)
router.post('/teams/:teamId/filmes' , InsertNewPlayer)
// router.get('/videos',getvideo)

function index(req,res) {
    res.render('index')
}

// function getMoviesDB(req, res) {
//     db.getAllMovies().then(resultFilmes => {
//         res.render('movies', { 'arrayFilmes': resultFilmes })
//     })
// }

function getMovieByTitle(req, res) {
    if(req.query.movieName){
        db.getMovieByTitle(req.query.movieName).then(resultFilmes => {
            res.render('movies', { 'arrayFilmes': resultFilmes })
        })
    }else{
        db.getAllMovies().then(resultFilmes => {                   //db. const criada acima que faz o request a BD
            res.render('movies', { 'arrayFilmes': resultFilmes })  //'movies' direcciona para movies.hbs, arrayFilmes esta na pag html
        })
    }
}






function getTeamsByCompetitionId(req, res) {
    if(req.query.compId){
        db.getTeamsByCompetitionId(req.query.compId).then(resultTeams => {
            const model = resultTeams.map(team => {
                return {
                    id_team: team.id_team,
                    name: team.name,
                    position: team.position,
                    recent_form : team.recent_form,
                    path: `/teams/${team.id_team}/players`
                }
            })
            res.render('teams', { 'arrayTeams': model })
        })
    }else{
        res.render('teams')
    }
}

function InsertNewPlayer(req,res) {
    db.InsertNewPlayer(req.query.teamId,req.body.playerId,req.body.playerName,req.body.playerPosition,req.body.playerAge)
    .then(()=> res.status(404))
}

module.exports = router