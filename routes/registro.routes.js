const express = require('express')
const routerRegistro = express.Router()

// Rutas de registro

routerRegistro.get('/', (req, res) => {
    /* res.send('Registro de usuarios (PUBLICO)') */
    res.render('registro/index', { title: ' | Registro' })
})

routerRegistro.post('/', (req, res) => {
    res.send('Va a guardar los datos del usuario registrado')
})

module.exports = routerRegistro