const express = require('express');
const routes = express.Router();
const Controller = require('./controller');

routes.get('/', Controller.store);

module.exports = routes;