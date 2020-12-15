const Foto = require('../models/fotos');

module.exports = async (req, res) => {
    const {id, title, description} = req.body;
    console.log("working")
    const query = Foto.where({_id: id})

    const response = await query.findOneAndUpdate({
        title: title,
        description: description

    });
    console.log(response);
    res.redirect('/')
}