const express = require('express');
const DevController = require('./controllers/DevController');

const routes = express.Router(); // usando a função Router do express.

routes.post('/devs', DevController.store);// O método post serve para criar alguma coisa.

module.exports = routes;