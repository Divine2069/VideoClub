'use strict'


const express = require('express')
const app = express()
const webApiRouter = require('./library/WebApi')
const webAppRouter = require('./library/WebApp')

app.set('view engine', 'hbs') //engine que permite termos o mesmo layout em tds as pags
app.use(express.json()) //parse of http request body, and populates req.body
app.use(express.urlencoded({extended : true}))
app.use(express.static('public')) // direct access to all files from public dir
app.use('/api', webApiRouter)
app.use(webAppRouter)

console.log('select * from Filmes where Title_Name LIKE \'%name%\'')

app.listen(3000, () => {
    console.log('Listening in port 3000')
})