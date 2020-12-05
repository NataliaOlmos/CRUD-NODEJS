module.exports = (req, res) => {
    console.log(req.body.name)
    res.send(`NEW ITEM`);
}