var mongoose = require('mongoose');

var itemSchema = mongoose.Schema({
  title: String,
  text: String
});

Item = mongoose.model('Item', itemSchema);

module.exports = Item;