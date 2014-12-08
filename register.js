var fs   = require('fs')
var yaml = require('./')

require.extensions['.yml'] = require.extensions['.yaml'] = function (m, f) {
  m.exports = yaml.parse(fs.readFileSync(f, 'utf8'), { filename: f })
}
