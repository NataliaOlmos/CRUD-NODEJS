const Foto = require("../models/fotos")

module.exports = (req, res) => {
    res.render('test', { title: 'Hey', message:'Hello there'});
    // const foto = new Foto({
    //     title:'titulo',
    //     description:'Hola a todos',
    //     date:new Date(),
    //     filename: 'foto.jpg'
    // });
    // console.log(foto) 

    // foto.save();

    // res.send('Sección de prueba')
}