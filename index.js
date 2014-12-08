
var yaml = require('js-yaml')

Object.keys(yaml).forEach(function(k) {
  exports[k] = yaml[k]
})

// https://github.com/nodeca/js-yaml/pull/152
exports.stringify = yaml.safeDump
exports.parse = yaml.safeLoad
