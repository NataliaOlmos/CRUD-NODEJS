const Foto = require("../models/fotos")

module.exports = (req, res) => {
    res.render('test', { title: 'Hey', message:'Hello there'});
    
}