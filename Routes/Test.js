const Foto = require("../models/fotos")

module.exports = (req, res) => {
    const foto = new Foto({
        title:'titulo',
        description:'Hola a todos',
        date:new Date(),
        filename: 'foto.jpg'
    });
    console.log(foto)

    foto.save();

    res.send('Sección de prueba')
}