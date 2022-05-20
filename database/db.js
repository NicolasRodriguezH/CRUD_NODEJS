const mysql = require('mysql')
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_nodejs'
})

conexion.connect((error) => {
    if (error) {
        console.error(`Ha habido un error de conexion en ${error.line}`)
        return
    }
    console.info(`La conexion a la ddbb a sido exitosa`)
})

module.exports = conexion