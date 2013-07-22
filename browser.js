var levelup = require('levelup')
var Leveljs = require('level-js')
var Memdown = require('memdown')

function browser (opts) {
  return function (name, _opts, cb) {
    name = name || 'db_' + Date.now()
    _opts = _opts || {}
    var ljs
    _opts.db = function (l) { return ljs = new Leveljs(l) }
    var db = levelup(name, _opts, cb)
    if (opts.clean !== false)
      ljs.idb.deleteDatabase()
    return db
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

