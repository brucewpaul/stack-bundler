var db = require('../index.js');
var Item = require('../models/Item.js');

var Items = new db.Collection();

Items.model = Item;

module.exports = Items;
