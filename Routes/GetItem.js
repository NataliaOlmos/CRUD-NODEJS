const Foto = require('../models/fotos')
module.exports = async (req, res) => {
    const { id } = req.params
    console.log(id);
    const query = Foto.where({_id: id})
    const item = await query.findOne();
    console.log(item.filename);
//     query.findOne((err, item) => {
// if (err) return handleError(err);
 res.render('getitem',{ 
     item: item
})
    ;
//     });
    //res.send(`id:${req.params.id}`);
}