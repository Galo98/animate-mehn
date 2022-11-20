const mongoose = require('mongoose')

/* --- ESQUEMA DE LOS USUARIOS --- */

const Schema = mongoose.Schema

const usuarioSchema = new Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    email: { type: String, required: true },
    empresa: { type: String, required: true },
    contraseña: { type: String, required: true }
})

/* MODELO: Defino la colección y le confirmo como van a tener que ser los documentos  */

module.exports = mongoose.model('usuario', usuarioSchema)

