'use strict'

const sql = require('mssql')

const config = {
    user: 'sa',
    password: 'AlunosEKP01',
    server: 'localhost\\SQLEXPRESS',
    database: 'Project_EKP01_TrailerFlix',
    trustServerCertificate: true,
}

/**
 * @param {String} password User passsword.
 * @param {String} name Name of the user.
 * @returns {User} New User object.
 */
 function newUser(username, password) {
    return {
        username,
        password
    }
}

async function checkUser(username) {
    try {
        const connect = await sql.connect(config)
        const result = await connect.request().query(`select * from users where username= '${username}'`)
        if (result.recordset.length > 0)
            return true
        return false
    } catch (error) {
        console.log(error)
        throw error
    }
}
async function insertUser(username, encryptData) {
    try {
        const hasUser = await checkUser(username)
        if (hasUser) {
            const err = new Error('Username already exists')
            err.status = 409
            return err
        }
        const connect = await sql.connect(config)
        const query =`insert into users values('${username}', '${encryptData[0]}', '${encryptData[1]}', '${encryptData[2]}')`
        await connect.request().query(query)
        return newUser(username, encryptData[0])
    } catch (error) {
        console.log(error)
        throw error
    }
}
async function getUser(username) {
    try {
        const connect = await sql.connect(config)
        const result = await connect.request().query(`select * from users where username= '${username}'`)
        return result.recordset[0]
    } catch (error) {
        console.log(error)
        throw error
    }
}

// async function getAllMovies() {
//     try {
//         const connect = await sql.connect(config)
//         const result = await connect.request().query('select * from Filmes')
//         return result.recordset
//     } catch (error) {
//         console.log(error)
//         throw error
//     }
// }

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

async function getMoviePage(movieId) {
    try {
        const connect = await sql.connect(config)
        const query = `select * from Filmes where Id_Filme = ${movieId}`
        const result = await connect.request().query(query)
        return result.recordset[0]
    } catch (error) {
        console.log(error)
        throw error
    }
}


async function getSerieByTitle(name) {
    try {
        const connect = await sql.connect(config)
        const query = `select * from Series where Title_Name LIKE \'%${name}%\'`
        const result = await connect.request().query(query)
        return result.recordset
    } catch (error) {
        console.log(error)
        throw error
    }
}

async function getSeriePage(serieId) {
    try {
        const connect = await sql.connect(config)
        const query = `select * from Series where Id_Serie = ${serieId}`
        const result = await connect.request().query(query)
        return result.recordset[0]
    } catch (error) {
        console.log(error)
        throw error
    }
}



async function getDocumentaryByTitle(name) {
    try {
        const connect = await sql.connect(config)
        const query = `select * from Documentary where Title_Name LIKE \'%${name}%\'`
        const result = await connect.request().query(query)
        return result.recordset
    } catch (error) {
        console.log(error)
        throw error
    }
}

async function getDocumentaryPage(documentaryId) {
    try {
        const connect = await sql.connect(config)
        const query = `select * from Documentary where Id_Documentary = ${documentaryId}`
        const result = await connect.request().query(query)
        return result.recordset[0]
    } catch (error) {
        console.log(error)
        throw error
    }
}



async function getAnimeByTitle(name) {
    try {
        const connect = await sql.connect(config)
        const query = `select * from Anime where Title_Name LIKE \'%${name}%\'`
        const result = await connect.request().query(query)
        return result.recordset
    } catch (error) {
        console.log(error)
        throw error
    }
}

async function getAnimePage(animeId) {
    try {
        const connect = await sql.connect(config)
        const query = `select * from Anime where Id_Anime = ${animeId}`
        const result = await connect.request().query(query)
        return result.recordset[0]
    } catch (error) {
        console.log(error)
        throw error
    }
}



module.exports = {
    getMovieByTitle, getMoviePage, getSerieByTitle, getSeriePage,
    getDocumentaryByTitle, getDocumentaryPage, getAnimeByTitle, getAnimePage, 
    getUser, insertUser
}