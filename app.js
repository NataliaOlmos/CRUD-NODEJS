const express = require('express');
const app = express();
const mongoose = require ('mongoose')
require('dotenv').config()
const uri = 'mongodb://localhost:27017/newDB'
const { v4: uuidv4 } = require('uuid')
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
      const originalname = file.originalname;
      const extension = originalname.substring(originalname.lastIndexOf('.'), originalname.length);
      cb(null, uuidv4() + extension)
    }
  })
   
const upload = multer({ storage: storage })



//routes
const aboutRoute = require('./Routes/About')
const testRoute = require('./Routes/Test')
const getitemRoute = require('./Routes/GetItem')
const uploadRoute = require('./Routes/Upload')
const deleteRoute = require('./Routes/Delete')
const newItemRoute = require('./Routes/NewItem')
const updateRoute = require('./Routes/Update')
const getAllRoute = require('./Routes/Getall')


//modelo
const Foto = require('./models/fotos');


// //MIDDLEWARE
app.use(express.urlencoded({extended: false}));
app.use(express.json())
app.use(express.static(__dirname + '/public'));
app.use('/asset', express.static('public/uploads'));

//template engine
app.set('view engine', 'pug')


mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('open', _ =>{
    console.log('Database is connected to', uri)
})

mongoose.connection.on('error', err =>{
    console.log(err)
})

app.get('/about', aboutRoute);
app.get('/test', testRoute);
app.get('/getall', getAllRoute);
app.get('/get/:id', getitemRoute);
app.get('/upload', uploadRoute);
app.get('/delete/:id', deleteRoute);
app.post('/update', updateRoute);



app.post('/new',  upload.single("filename"), async (req, res) => {
    console.log(req.file)
    const { title, description } = req.body;
    const foto = new Foto({
         title: title,
         description: description,
         filename: req.file.filename,
         date:new Date(),
        
     });
 
     await foto.save();
     res.redirect('/');
 
});




app.listen(process.env.PORT || 3000, () => { 
    console.log("Servidor iniciado en");
});

