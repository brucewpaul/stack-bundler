var db = require('../index.js');

var Item = db.Model.extend({
  tableName: 'items',
  hasTimestamps: true,
});

module.exports = Item;
