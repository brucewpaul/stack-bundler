var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var db = require('./db');
var router = require('./routes');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api', router); //this is where we assign router to all requests starting with /api

app.use(express.static(path.join(__dirname, '../client')));

app.listen(3000, function () {
  console.log('Your basic-server is listening on 3000\nGo to \'127.0.0.1:3000\' in a browser to access your web-application!');
});

module.exports = app;
