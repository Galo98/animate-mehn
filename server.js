const express = require('express')
const { engine } = require('express-handlebars')

require('dotenv').config()
const app = express()

app.engine('hbs', engine(
    {
        extname: '.hbs'
    }
))

app.set('view engine', 'hbs')

// Middleware

app.use(express.static('public'))

app.get('/', (req, res) => {
    /* res.send('Landing page (PUBLICO)') */
    res.render('index')
})

// Rutas de registro

app.get('/registro', (req, res) => {
    /* res.send('Registro de usuarios (PUBLICO)') */
    res.render('registro/index', {title: ' | Registro'})
})

app.post('/registro', (req, res) => {
    res.send('Va a guardar los datos del usuario registrado')
})

// Rutas de blog

app.get('/blog', (req, res) => {
    /* res.send('Blog de noticias (PUBLICO)') */
    res.render('blog/index')
})

app.get('/blog/gestion', (req, res) => {
    /* res.send('Gestion de blog, donde se puede modificar agregar o borrar noticias (PRIVADO)') */
    res.render('blog/gestion')
})

/* ------ Crear noticia ------ */
app.get('/blog/create', (req, res) => {
    /* res.send('Muestra el formulario para crear nuevas noticias (PRIVADO)') */
    res.render('blog/create')
})

app.post('/blog', (req, res) => {
    res.send('Guarda las nuevas noticias en la base de datos (PRIVADO)')
})

/* ------ Editar noticia ------ */
app.get('/blog/edit', (req, res) => {
    /* res.send('Muestra el formulario para editar noticias (PRIVADO)') */
    res.render('blog/edit')
})

app.put('/blog/:id', (req, res) => {
    res.send('Guarda los cambios de la noticia editada (PRIVADO)')
})

/* ------ Borrar noticia ------ */

app.delete('/blog/:id', (req, res) => {
    res.send('Borra una noticia de la base de datos (PRIVADO)')
})

// Rutas de oportunidades

app.get('/oportunidades', (req, res) => {
    res.send('Muestra las oportunidades (PUBLICO)')
})

app.get('/oportunidades/gestion', (req, res) => {
    res.send('Gestion de oportunidades, donde se puede modificar agregar o borrar oportunidades (PRIVADO)')
})

/* ------ Crear oportunidad ------ */

app.get('/oportunidades/create', (req, res) => {
    res.send('Formulario para agregar nuevas oportunidades (PRIVADO)')
})

app.post('/oportunidades', (req, res) => {
    res.send('Guarda las nuevas oportunidades en la base de datos (PRIVADO)')
})

/* ------ Editar oportunidad ------ */

app.get('/oportunidades/edit', (req, res) => {
    res.send('Muestra el formulario para editar una oportunidad (PRIVADO)')
})

app.put('/oportunidades/:id', (req, res) => {
    res.send('Guarda los cambios de la oportunidad editada (PRIVADO)')
})

/* ------ Borrar oportunidad ------ */

app.delete('/oportunidades/:id', (req, res) => {
    res.send('Borra una oportunidad de la base de datos(PRIVADO)')
})


const PORT = process.env.PORT
    app.listen(PORT, (err) => {
        if (err) throw new Error(`Tuvimos un problema ${err}`)
        console.log(`Todo ok en el puerto: ${PORT}`)
    })