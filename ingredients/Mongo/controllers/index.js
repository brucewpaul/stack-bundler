var Item = require('../db/models/Item.js');

module.exports.retreiveAll = function(req, res) {
  Item.find(function(err, items) {
    if (err) {
      return console.error(err);
    }
    res.status(200).send({results: items});
  });
}

module.exports.createOne = function(req, res) {
  var itemToAdd = new Item({
    title: req.body.title,
    text: req.body.text
  });
  itemToAdd.save(function(err, itemToAdd) {
    if (err) {
      return console.error(err);
    }
    res.status(201).send(itemToAdd);
  });
}