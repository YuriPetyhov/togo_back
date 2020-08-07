const Card = require('../models/cardModel');
exports.getAllCards = function(req, res) {

    Card.find({}, (err, cards) => {
        if (err) return console.error(err)
        res.send(cards)
    })
};

exports.getCard = function(req, res) {
    Card.findOne({_id: req.params.id }, (err, card) => {
        if (err) return console.error(err)
        res.send(card)
    })
};

exports.addCard = function (req, res) {
    if(!req.body) return res.sendStatus(400);

    var card = new Card(req.body)
    card.save((err) => {
        if(err) return console.log(err);
        res.send(card);
    })

};


exports.uppdateCard = function (req, res) {
    const {body, params} = req;
    console.log(body, params)
    if(!req.body) return res.sendStatus(400);
    Card.updateOne({_id: req.params.id}, body, (err, item) => {
        if(err) return console.error(err)

        res.send(item)
    })

};