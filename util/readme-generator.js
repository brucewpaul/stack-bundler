module.exports = function(options) {
  var result = '';
  result += '## Installation\n\n```bash\n';
  result += '$ npm install\n';
  if (options.frontEnd.framework === 'React') {
    result += '$ npm run start-webpack\n';
  }
  result += '$ npm run start-nodemon\n';
  result += '```\n';
  return result;
};