const Card = require('../models/cardModel');
exports.getAllCards = function(req, res) {
    res.send('test get all items')
};
exports.addCard = function (req, res) {
    if(!req.body) return res.sendStatus(400);

    var card = new Card(req.body)
    card.save((err) => {
        if(err) return console.log(err);
        res.send(card);
    })

};