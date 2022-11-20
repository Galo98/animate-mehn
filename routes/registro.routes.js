const express = require('express')
const routerRegistro = express.Router()


// Rutas de registro

routerRegistro.get('/', (req, res) => {
    /* res.send('Registro de usuarios (PUBLICO)') */
    res.render('registro/index', { title: ' | Registro' })
})

routerRegistro.post('/', (req, res) => {
    res.send('Va a guardar los datos del usuario registrado')
    const obj = {
        nombre: '',
        apellido: '',
        email: '',
        empresa: '',
        contraseña: ''
    }

    const usuarioNuevo = new usuarioModel(objUsuario)
    
    usuarioNuevo.save(err => {
        if (err) throw new Error(`Error en la escritura de la base de datos ${err}`)
        console.log('Escritura ok')
        res.send('Se creo bien!')
    })
})

module.exports = routerRegistro