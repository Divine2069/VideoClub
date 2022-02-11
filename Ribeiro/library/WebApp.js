'use strict'
//DATABASE--------------------------------------------------------
const express = require('express')
const router = express.Router()
const db = require('./DB')
const fs = require('fs')
const fetch = require('node-fetch')
const url = 'http://api.football-api.com/2.0/competitions?Authorization=565ec012251f932ea4000001fa542ae9d994470e73fdb314a8a56d76'

//##########################################################################
//ROUTES--------------------------------------------------------
router.get('/', index)
router.get('/movies', getMovieByTitle)
router.get('/movies/info/:Id_Filme', getMoviePage)
router.get('/series', getSerieByTitle)
router.get('/series/info/:Id_Serie', getSeriePage)
router.get('/documentary', getDocumentaryByTitle)
router.get('/documentary/info/:Id_Documentary', getDocumentaryPage)
router.get('/anime', getAnimeByTitle)
router.get('/anime/info/:Id_Anime', getAnimePage)


//##########################################################################
//FUNCOES--------------------------------------------------------
//FUNCAO QUE VAI BUSCAR O NOSSO BODY GERAL EM INDEX.HBS
function index(req, res) {
    res.render('index')
}

//ESTA funcao oculta JÁ NÃO É NECESSARIA
// function getMoviesDB(req, res) {
//     db.getAllMovies().then(resultFilmes => {
//         res.render('movies', { 'arrayFilmes': resultFilmes })
//     })
// }


//PERMITE A BUSCA DO FILME NA DB PELO NAME TITLE
function getMovieByTitle(req, res) {
    if (req.query.movieName) {
        db.getMovieByTitle(req.query.movieName).then(resultFilmes => {
            resultFilmes.forEach(filme => {
                filme.path = `/movies/info/${filme.Id_Filme}`,
                filme.Img_Filme = `/Covers/Filmes/${filme.Title_Name}_cover.jpeg`,
                filme.Released_Date =  `${filme.Released_Date.getMonth()}/${filme.Released_Date.getFullYear()}`
            }
            )
            res.render('movies', { 'arrayFilmes': resultFilmes })
        })
    } else {
        res.render('movies')
    }
}
function getMoviePage(req, res) {
    db.getMoviePage(req.params.Id_Filme).then(resultFilme => {
        resultFilme.Img_Filme = `/Covers/Filmes/${resultFilme.Title_Name}_cover.jpeg`
        res.render('moviesDescription', resultFilme)
    })
}



function getSerieByTitle(req, res) {
    if (req.query.serieName) {
        db.getSerieByTitle(req.query.serieName).then(resultSeries => {
            resultSeries.forEach(serie => {
                serie.path = `/series/info/${serie.Id_Serie}`
                serie.Img_Serie = `/Covers/Series/${serie.Title_Name}_cover.jpeg`
                serie.Released_Date =  `${serie.Released_Date.getMonth()}/${serie.Released_Date.getFullYear()}`
            }
            )
            res.render('series', { 'arraySeries': resultSeries })
        })
    } else {
        res.render('series')
    }
}

function getSeriePage(req, res) {
    db.getSeriePage(req.params.Id_Serie).then(resultSerie => {
        resultSerie.Img_Serie = `/Covers/Series/${resultSerie.Title_Name}_cover.jpeg`
        res.render('seriesDescription', resultSerie)
    })
}



function getDocumentaryByTitle(req, res) {
    if (req.query.documentaryName) {
        db.getDocumentaryByTitle(req.query.documentaryName).then(resultDocumentarys => {
            resultDocumentarys.forEach(documentary => {
                documentary.path = `/documentary/info/${documentary.Id_Documentary}`
                documentary.Img_Documentary = `/Covers/Documentary/${documentary.Title_Name}_cover.jpeg`
                documentary.Released_Date =  `${documentary.Released_Date.getMonth()}/${documentary.Released_Date.getFullYear()}`
            }
            )
            res.render('documentary', { 'arrayDocumentarys': resultDocumentarys })
        })
    } else {
        res.render('documentary')
    }
}

function getDocumentaryPage(req, res) {
    db.getDocumentaryPage(req.params.Id_Documentary).then(resultDocumentary => {
        resultDocumentary.Img_Documentary = `/Covers/Documentary/${resultDocumentary.Title_Name}_cover.jpeg`
        res.render('documentaryDescription', resultDocumentary)
    })
}



function getAnimeByTitle(req, res) {
    if (req.query.animeName) {
        db.getAnimeByTitle(req.query.animeName).then(resultAnimes => {
            resultAnimes.forEach(anime => {
                anime.path = `/anime/info/${anime.Id_Anime}`
                anime.Img_Anime = `/Covers/Anime/${anime.Cover}`
                anime.Released_Date =  `${anime.Released_Date.getMonth()}/${anime.Released_Date.getFullYear()}`
            }
            )
            res.render('anime', { 'arrayAnimes': resultAnimes })
        })
    } else {
        res.render('anime')
    }
}

function getAnimePage(req, res) {
    db.getCover(req.params.Cover).then(resultCover => {
        resultCover.ImgCover = `/Covers/Anime/${resultAnime.Cover}`
    })

    db.getAnimePage(req.params.Id_Anime).then(resultAnime => {
        resultAnime.Img_Anime = `/Covers/Anime/${resultAnime.Cover}`
        res.render('animeDescription', resultAnime)
    })
}








module.exports = router