exports.scripts = {
  "postinstall": "bower install",
  "test-client": "karma start",
}

exports.dependencies = {
  "axios": "^0.15.3",
  "body-parser": "^1.15.2",
  "bookshelf": "^0.10.2",
  "express": "^4.14.0",
}

exports.devDependencies = {
  "nodemon": "^1.11.0",
  "bower": "^1.7.7",
  "karma": "^0.13.22",
  "karma-mocha": "^1.3.0",
  "karma-junit-reporter": "^0.4.1",
  "karma-phantomjs-launcher": "^1.0.2",
  "karma-chai": "^0.1.0",
  "sinon": "^1.17.7",
  "karma-sinon": "^1.0.5",
  "grunt-karma": "^2.0.0",
}