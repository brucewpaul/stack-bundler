var express = require('express');
var app = express();
const path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


var exec = require('child_process').exec;
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require("fs"));

var bundler = require('./util/bundler.js');

/**
 * @param {object} options - selected options from client
 * @param {function} cb - callback function to send response back to client
**/

app.post('/build/', function (req, res) {
  bundler(req.body, function(err, folderName) {
    if ( err ) {
      res.status(500).send(err);
    } else {
      var framework = req.body.frontEnd.framework;
      var packages = req.body.devTools.taskRunner.plugins;

      res.status(201).send(folderName);
    }
  });
});

app.get('/bundle/:id', (req, res) => {
  var fileName = req.params.id + '.tar.gz';
  res.download(path.resolve(__dirname, 'bundles', fileName ));
});

app.get('*', (req, res) => {
  res.send('no route');
});


var server = app.listen(3000, function () {
  console.log('Project-Init Listening on 3000 yo');
});

module.exports = server;