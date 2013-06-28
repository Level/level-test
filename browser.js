var levelup = require('levelup')
var Leveljs = require('level-js')

function browser (name, _opts, cb) {
  _opts = _opts || {}
  _opts.db = function (l) { return new Leveljs(l) }
  name = name || 'level-js' + Date.now() + Math.random()
  return levelup(name, _opts, cb)
}

module.exports = function (opts) {
  opts = opts || {}
  return browser 
}

