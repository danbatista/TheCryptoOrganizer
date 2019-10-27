const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const uri = "mongodb+srv://dbadmin:55750000@thecryptodatabase-fosfg.gcp.mongodb.net/test?retryWrites=true&w=majority";
//Starting  App;
const app = express();

// Starting DB
mongoose.connect(uri, {useNewUrlParser:true, useUnifiedTopology:true})
.then(()=> console.log('Database is working...'))
.catch(e => console.log(e));

requireDir('./src/models');

//Rotas

app.use('/api', require('./src/routes'));


app.listen(3001);


