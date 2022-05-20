// Luego de iniciar el proyecto con node (npm init -y) se instancia a express, seguido al motor ejs
const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.use('/', require('./router'))

app.listen(3000, () => {
    console.log("Conexion exitoras en puerto http://localhost:3000")
})