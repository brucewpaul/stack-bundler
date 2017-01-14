var Items = require('../db/collections/items');
var Item = require('../db/models/Item.js');

module.exports.retreiveAll = function(req, res) {
   Item.where({}).fetchAll()
    .then(function(items) {
      res.status(200).send({results: items});
    })
    .catch((err) => {
      res.status(500).send(new Error(err));
    });
}

module.exports.createOne = function(req, res) {
  itemText = req.body.text || null;
  itemTitle = req.body.title || null;
  Items.create({
    text: itemText,
    title: itemTitle
  })
  .then(function(newLink) {
    res.status(201).send(newLink);
  });
}