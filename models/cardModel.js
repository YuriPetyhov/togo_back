const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    text: String
})

const Card = mongoose.model('card', cardSchema);

module.exports = Card