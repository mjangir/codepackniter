const generator = require('./generator');

module.exports = function (plop) {
  plop.setGenerator('codepackniter', generator);
};