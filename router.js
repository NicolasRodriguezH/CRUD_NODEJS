const express = require('express')
const router = express.Router()
const conexion = require('./database/db')

router.get('/', (req, res) => {
    conexion.query('SELECT * FROM users', (err, results) => {
        if(err){
            throw err
        }else{
            res.send(results)
        }
    })
})

module.exports = router