const modeloOportunidad = require('../models/oportunidades.models')

const crearOportunidad = async (req, res) => {
    res.send('Guarda las nuevas oportunidades en la base de datos (PRIVADO)')
    console.log(req.body)
    const nuevaOportunidad = new modeloOportunidad(req.body)

    await nuevaOportunidad.save()
}

module.exports = {
    crearOportunidad
}
