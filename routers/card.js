const express = require("express");
const Router = express.Router();
const cardController = require('../controlles/cardController');

Router.get('/', cardController.getAllCards);
Router.get('/create', cardController.addCard);

module.exports = Router;