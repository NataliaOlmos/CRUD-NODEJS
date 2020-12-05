const express = require('express');
const app = express();
const mongoose = require ('mongoose')
require('dotenv').config()
const uri = 'mongodb://localhost:27017/newDB'
const bodyPaser = require('body-parser');

//routes
const aboutRoute = require('./Routes/About')
const testRoute = require('./Routes/Test')
const getitemRoute = require('./Routes/GetItem')
const uploadRoute = require('./Routes/Upload')
const deleteRoute = require('./Routes/Delete')
const newItemRoute = require('./Routes/NewItem')
const updateRoute = require('./Routes/Update')



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

app.get('/about', aboutRoute);
app.get('/test', testRoute);
app.get('/get/:id', getitemRoute);
app.get('/upload', uploadRoute);
app.get('/delete/:id', deleteRoute);

app.post('/new', newItemRoute);
app.post('/update', updateRoute);



app.listen(process.env.PORT || 3000, () => { 
    console.log("Servidor iniciado en");
});

