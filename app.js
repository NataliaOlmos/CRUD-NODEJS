const express = require('express');
const app = express();
const mongoose = require ('mongoose')
require('dotenv').config()
const uri = 'mongodb://localhost:27017/test'

const bodyPaser = require('body-parser');

// //MIDDLEWARE
app.use(bodyPaser.urlencoded({extended: false}));
app.use(bodyPaser.json())
app.use(express.static(__dirname + '/public'));



mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('open', _ =>{
    console.log('Database is connected to', uri)
})

app.get('/about', (req, res) => {
    res.send('About section');
})



app.listen(process.env.PORT || 3000, () => { 
    console.log("Servidor iniciado en");
});

