const express = require('express')
const { route } = require('express/lib/application')
const router = express.Router()
const conexion = require('./database/db')

// MOSTRAR todos los registros
router.get('/', (req, res) => {
    conexion.query('SELECT * FROM users', (err, results) => {
        if(err){
            throw err
        }else{ /* Aca el error era cambiar res.send por res.render! */
            res.render("index", {results:results})
        }
    })
})

router.get('/data', (req, res) => {
    conexion.query('SELECT * FROM users', (err, results) => {
        if(err){
            throw err
        }else{ /* Aca con la otra forma se usa res.send en vez de render y con el JSON.stringify */
            data = JSON.stringify(results)
            res.send(data)
        }
    })
})

// Ruta para CREAR registros
router.get('/create', (req, res) => {
    res.render('create')
})

// RUTA PARA EDITAR REGISTROS
router.get('/edit/:id', (req, res) => {
    const id = req.params.id
    conexion.query('SELECT * FROM users WHERE id=?', [id], (error, results) => {
        if(error) {
            console.info(error)
        }else{
            res.render('edit', {user:results[0]})
        }
    })
})

// RUTA PARA ELIMINAR EL REGISTRO
router.get('/delete/:id', (req, res) => {
    const id = req.params.id
     conexion.query('DELETE FROM users WHERE id = ?', [id], (error, results) => {
         if(error) {
             console.log(error)
         }else{
             res.redirect('/')
         }
     })
})

// crud METHODS
const crud = require("./controllers/crud")
const { json } = require('express/lib/response')
router.post('/save', crud.save)
router.post('/update', crud.update)


module.exports = router