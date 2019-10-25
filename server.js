const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
//Starting  App;
const app = express();

// Starting DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {useUnifiedTopology:true});

requireDir('./src/models');

// Starting Mess with DB



//Rotas
app.use('/api', require('./src/routes'));


app.listen(3001);


