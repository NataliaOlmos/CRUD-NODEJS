const express = require('express');
const app = express();
const mongoose = require ('mongoose')
require('dotenv').config()
const uri = 'mongodb://localhost:27017/newDB'
const bodyPaser = require('body-parser');

//routes
const about = require('./Routes/About')
const test = require('./Routes/Test')


//modelo
const Foto = require('./models/fotos');


// //MIDDLEWARE
app.use(bodyPaser.urlencoded({extended: false}));
app.use(bodyPaser.json())
app.use(express.static(__dirname + '/public'));



mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('open', _ =>{
    console.log('Database is connected to', uri)
})

mongoose.connection.on('error', err =>{
    console.log(err)
})

app.get('/about', about)

app.get('/test', test)


app.listen(process.env.PORT || 3000, () => { 
    console.log("Servidor iniciado en");
});

