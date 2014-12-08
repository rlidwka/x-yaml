
var yaml = require('js-yaml')

Object.keys(yaml).forEach(function(k) {
  exports[k] = yaml[k]
})

// https://github.com/nodeca/js-yaml/pull/152
exports.stringify = function stringify(obj, options) {
  return yaml.safeDump(obj, options)
}

exports.parse = function parse(obj, options) {
  try {
    return yaml.safeLoad(obj, options)
  } catch(orig) {
    if (orig.name === 'YAMLException') {
      var err = SyntaxError(orig.message)
      err.reason = orig.reason
      err.row    = orig.mark.line
      err.column = orig.mark.column
      err.mark   = orig.mark
    }
  }
}
