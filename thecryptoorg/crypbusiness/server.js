const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');
const uri = "mongodb+srv://dbadmin:55750000@thecryptodatabase-fosfg.gcp.mongodb.net/test?retryWrites=true&w=majority";
//Starting  App;


const app = express();

app.use(express.json());
app.use(cors());

// Starting DB
mongoose.connect(uri, {useNewUrlParser:true, useUnifiedTopology:true})
.then(()=> console.log('Database is working...'))
.catch(e => console.log(e));



requireDir('./src/models');

//Rotas

app.use('/api', require('./src/routes'));


app.listen(7777);
