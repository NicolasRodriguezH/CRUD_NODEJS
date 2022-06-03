// Luego de iniciar el proyecto con node (npm init -y) se instancia a express, seguido al motor ejs
const express = require('express')
const { json } = require('express/lib/response')
const app = express()

app.set('view engine', 'ejs')

// Para habilitar la captura de datos desde el formulario
app.use(express.urlencoded({extended: false}))
app.use(express(json))

app.use('/', require('./router'))

app.listen(8000, () => {
    console.log("Conexion exitoras en puerto http://localhost:8000")
})