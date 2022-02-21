const crypto = require('crypto')
const algorithm = "aes-256-cbc"

function encryptPassword(password) {
    // generate 16 bytes of random data
    const initVector = crypto.randomBytes(16);
    
    // secret key generate 32 bytes of random data
    const securitykey = crypto.randomBytes(32);
    
    // the cipher function
    const cipher = crypto.createCipheriv(algorithm, securitykey, initVector)
    let encryptedPassword = cipher.update(password, "utf-8", "hex")
    encryptedPassword += cipher.final("hex")
    const stringInitVector = initVector.toString('hex') //covert to hex
    const stringSecuritykey = securitykey.toString('hex') ////covert to hex
    const encryptedData = [encryptedPassword, stringInitVector, stringSecuritykey]
    return encryptedData
}

function decryptPassword(password, stringInitVector, stringSecuritykey) {
    const initVector = Buffer.from(stringInitVector, 'hex')
    const securitykey = Buffer.from(stringSecuritykey, 'hex')
    // the decipher function
    const decipher = crypto.createDecipheriv(algorithm, securitykey, initVector)
    let decryptedPassword = decipher.update(password, "hex", "utf-8")
    decryptedPassword += decipher.final("utf8")
    return decryptedPassword
}
module.exports = { encryptPassword, decryptPassword }