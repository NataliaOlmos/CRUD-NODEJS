const Foto = require('../models/fotos')
module.exports = async (req, res) => {
    const fotos = await Foto.find()
        res.json(fotos);
}