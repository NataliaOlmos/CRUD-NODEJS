const express = require('express');
const app = express();
const mongoose = require ('mongoose')
require('dotenv').config()

const bodyPaser = require('body-parser');

//MIDDLEWARE
app.use(bodyPaser.urlencoded({extended: false}));
app.use(bodyPaser.json())
app.use(express.static(__dirname + '/public'));

const password = process.env.PASSWORD;
const user = process.env.USER;
const url = process.env.URL;
const dbName = process.env.DBNAME;
const uri = `mongodb://${user}:${password}@${url}/${dbName}`
mongoose.connect(uri , {useNewUrlParser: true, useUnifiedTopology: true }
    )
    const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

app.get('/about', (req, res) => {
    res.send('About section');
})



app.listen(process.env.PORT || 3000, () => { 
    console.log("Servidor iniciado en");
});
