exports.scripts = {
  "test": "mocha ./Test/React/.babelSetup.js ./Test/React/reactTest.jsx ./Test/ --recursive"
}

exports.dependencies = {
}

exports.devDependencies = {
  "babel": "^6.5.2",
  "babel-register": "^6.18.0",
  "jsdom": "^9.9.1",
  "mocha": "^3.2.0",
  "chai": "^3.5.0",
  "chai-http": "^3.0.0",
  "enzyme": "^2.7.0",
  "react-addons-test-utils": "^15.4.2"
}