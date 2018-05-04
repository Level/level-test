'use strict'

var packager = require('level-packager')
var memdown = require('memdown')
var xtend = require('xtend')

module.exports = function (getDown, getLocation, clean) {
  return function factory (down, defaults) {
    if (typeof down !== 'function') {
      defaults = down
      down = null
    }

    defaults = xtend(defaults)
    down = down || (defaults.mem ? memdown : getDown(defaults))

    var levelup = packager(down)

    return function ctor (name, opts, callback) {
      if (typeof name === 'function') {
        callback = name
        name = opts = null
      } else if (typeof name === 'object' && name !== null) {
        callback = opts
        opts = name
        name = null
      } else if (typeof opts === 'function') {
        callback = opts
        opts = null
      }

      opts = xtend(defaults, opts)

      if (defaults.mem) {
        var location = ''
      } else {
        location = getLocation(name || 'db_' + Date.now())
        if (opts.clean !== false) clean(location, down)
      }

      return levelup(location, opts, callback)
    }
  }
}
