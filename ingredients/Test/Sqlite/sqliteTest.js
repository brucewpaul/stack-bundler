var path = require('path');
var request = require('request');
var expect = require('chai').expect;

var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: path.join(__dirname, '../db/data/project-init.sqlite')
  },
  useNullAsDefault: true
});

var db = require('bookshelf')(knex);

describe('Sqlite database', function() {
  beforeEach(function(done) {
    done();
  });

  afterEach(function(done) {
    done();
  });

  it('Should insert posted items to the DB', function(done) {

    var requestParams = {method: 'POST',
      uri: 'http://127.0.0.1:3000/api/items',
      json: {
        title: 'Test Title',
        text: 'Test Text'
      }
    };

    request(requestParams, function(error, response, body) {

      knex.select()
        .from('items')
        .where('title', '=', 'Test Title')
        .then(function(result) {
          expect(result[0].title).to.equal('Test Title');
          done()
        })
    });

  });

  it('Should output all messages from the DB', function(done) {

    knex.select()
      .from('items')
      .where('title', '=', 'Test Title')
      .then(function(result) {
        expect(result[0].title).to.equal('Test Title');
        knex('items')
          .where('title', '=', 'Test Title')
          .del()
          .then((val) => {
            done();
          })
      })
  });
});
