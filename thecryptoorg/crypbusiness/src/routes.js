const express = require('express');
const routes  = express.Router();

const AccountController =  require('./controllers/AccountController');
const mRentController = require('./controllers/MonthRentabilityController');
const RentController = require('./controllers/RentabilityController');
const UserController = require('./controllers/UserController');
//app.use
// Accounts

//listALL
routes.get('/users',UserController.index);
//GetByEmailAndPassword
routes.get('/login/:email',UserController.getLogin);
//findBYID
routes.get('/users/:id', UserController.show);
//add
routes.post('/users',UserController.store);
//update
routes.put("/users/:id",UserController.update);
//delete
routes.delete("/users/:id",UserController.destroy);

// Accounts

//listALL
routes.get('/accounts',AccountController.index);
//findBYID
routes.get('/accounts/:id', AccountController.show);
//add
routes.post('/accounts',AccountController.store);
//update
routes.put("/accounts/:id",AccountController.update);
//delete
routes.delete("/accounts/:id",AccountController.destroy);


// Rentability 

//listALL
routes.get('/rent',RentController.index);
//findBYID
routes.get('/rent/:id', RentController.show);
//add
routes.post('/rent',RentController.store);
//update
routes.put("/rent/:id",RentController.update);
//delete
routes.delete("/rent/:id",RentController.destroy);


// Rentability Month

//listALL
routes.get('/mrent',mRentController.index);
//findBYID
routes.get('/mrent/:id', mRentController.show);
//add
routes.post('/mrent',mRentController.store);
//update
routes.put("/mrent/:id",mRentController.update);
//delete
routes.delete("/mrent/:id",mRentController.destroy);

module.exports = routes;