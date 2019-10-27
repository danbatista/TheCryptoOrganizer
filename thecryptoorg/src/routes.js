const express = require('express');
const routes  = express.Router();

const AccountController =  require('./controllers/AccountController');


//app.use

//
// Primeira Rota

routes.get('/accounts',AccountController.index);
routes.post('/accounts',AccountController.store);

module.exports = routes;