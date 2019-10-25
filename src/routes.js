const express = require('express');

const routes  = express.Router();

const AccountController =  require('./controllers/AccountController');

//
// Primeira Rota
routes.get('/account',AccountController.index);

module.exports = routes;