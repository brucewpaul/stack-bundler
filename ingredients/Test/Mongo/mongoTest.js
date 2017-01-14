var path = require('path');
var request = require('request');
var expect = require('chai').expect;
var db = require('../../server/db');
var Item = require('../../server/db/models/Item.js');

describe('Mongo database', function() {
  after(function(done) {
    Item.remove({}, function() {
      done();
    });
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
      Item.findOne({'title': 'Test Title'}, function(err, item) {
        expect(item.title).to.equal('Test Title');
        done();
      });
    });
  });

  it('Should output all messages from the DB', function(done) {
    var requestParams = {method: 'GET',
      uri: 'http://127.0.0.1:3000/api/items'
    };

    request(requestParams, function(error, response, body) {
      expect(JSON.parse(body).results[0].title).to.equal('Test Title');
      done();
    });
  });
});