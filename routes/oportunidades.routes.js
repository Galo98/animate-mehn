const express = require('express')
const routerOpor = express.Router()

// Rutas de oportunidades

routerOpor.get('/', (req, res) => {
    res.send('Muestra las oportunidades (PUBLICO)')
})

routerOpor.get('/gestion', (req, res) => {
    res.send('Gestion de oportunidades, donde se puede modificar agregar o borrar oportunidades (PRIVADO)')
})

/* ------ Crear oportunidad ------ */

routerOpor.get('/create', (req, res) => {
    res.send('Formulario para agregar nuevas oportunidades (PRIVADO)')
})

routerOpor.post('/', (req, res) => {
    res.send('Guarda las nuevas oportunidades en la base de datos (PRIVADO)')
})

/* ------ Editar oportunidad ------ */

routerOpor.get('/edit', (req, res) => {
    res.send('Muestra el formulario para editar una oportunidad (PRIVADO)')
})

routerOpor.put('/:id', (req, res) => {
    res.send('Guarda los cambios de la oportunidad editada (PRIVADO)')
})

/* ------ Borrar oportunidad ------ */

routerOpor.delete('/:id', (req, res) => {
    res.send('Borra una oportunidad de la base de datos(PRIVADO)')
})

module.exports = routerOpor