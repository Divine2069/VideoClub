'use strict'

const express = require('express')
const app = express()
const webApiRouter = require('./library/WebApi')
const webAppRouter = require('./library/WebApp')
const db = require('./library/DB')
const passport = require('passport')

app.set('view engine', 'hbs') //engine que permite termos o mesmo layout em tds as pags
app.use(express.json()) //parse of http request body, and populates req.body
app.use(express.urlencoded({extended : true}))
app.use(express.static('public')) // direct access to all files from public dir


app.use(require('cookie-parser')())
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }))
app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser((user, done) => {
    done(null, user.username)
})
passport.deserializeUser((username, done) => {
    db
        .getUser(username)
        .then(user => done(null, user))
        .catch(err => done(err))
})

app.use('/api', webApiRouter)
app.use(webAppRouter)


app.listen(3000, () => {
    console.log('Listening in port 3000')
})