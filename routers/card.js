const express = require("express");
const Router = express.Router();
const cardController = require('../controlles/cardController');

Router.get('/', cardController.getAllCards);
Router.get('/:id', cardController.getCard);
Router.post('/create', cardController.addCard);
Router.put('/:id', cardController.uppdateCard);

module.exports = Router;