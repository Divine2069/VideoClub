'use strict'

const sql = require('mssql')

const config = {
    user: 'sa',
    password: 'AlunosEKP01',
    server: 'localhost\\SQLEXPRESS',
    database: 'Project_EKP01_TrailerFlix',
    trustServerCertificate: true,
}

async function getAllMovies() {
    try {
        const connect = await sql.connect(config)
        const result = await connect.request().query('select * from Filmes')
        return result.recordset
    } catch (error) {
        console.log(error)
        throw error
    }
}

async function getMovieByTitle(name) {
    try {
        const connect = await sql.connect(config)
        const query = `select * from Filmes where Title_Name LIKE \'%${name}%\'`
        const result = await connect.request().query(query)
        return result.recordset
    } catch (error) {
        console.log(error)
        throw error
    }
}














module.exports ={getAllMovies,getMovieByTitle}