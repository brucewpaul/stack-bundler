var path = require('path');
var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: path.join(__dirname, './data/project-init.sqlite')
  },
  useNullAsDefault: true
});
var db = require('bookshelf')(knex);

db.knex.schema.hasTable('items').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('items', function (link) {
      link.increments('id').primary();
      link.string('title', 255);
      link.string('text', 255);
      link.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

module.exports = db;
