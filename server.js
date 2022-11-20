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

// Rutas

app.get('/', (req, res) => {
    /* res.send('Landing page (PUBLICO)') */
    res.render('index')
})

app.use('/blog', require('./routes/blog.routes'))
app.use('/oportunidades', require('./routes/oportunidades.routes'))
app.use('/registro', require('./routes/registro.routes'))

const PORT = process.env.PORT
    app.listen(PORT, (err) => {
        if (err) throw new Error(`Tuvimos un problema ${err}`)
        console.log(`Todo ok en el puerto: ${PORT}`)
    })