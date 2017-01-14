exports.scripts = {
  "start-webpack": "webpack --config config.webpack.js --watch --colors --progress"
}

exports.dependencies = {
  "express": "^4.14.0",
  "body-parser": "^1.15.2",
  "react": "^15.4.1",
  "react-dom": "^15.4.1",
  "axios": "^0.15.3"
}

exports.devDependencies = {
  "nodemon": "^1.11.0",
  "babel-core": "^6.21.0",
  "babel-loader": "^6.2.10",
  "babel-preset-es2015": "^6.18.0",
  "babel-preset-react": "^6.16.0",
  "webpack": "^1.14.0"
}