var levelup = require('levelup')
var Leveljs = require('level-js')
var Memdown = require('memdown')

function browser (opts) {
  return function (name, _opts, cb) {
    name = name || 'db_' + Date.now()
    _opts = _opts || {}
    _opts.db = function (l) { return new Leveljs(l) }
    return levelup(name, _opts, cb)
  }
}

function mem (name, _opts, cb) {
  _opts = _opts || {}
  _opts.db = function (l) { return new Memdown(l) }
  name = name || 'in-memory'
  return levelup(name, _opts, cb)
}

module.exports = function (opts) {
  opts = opts || {}
  return opts.mem ? mem : browser(opts)
}

