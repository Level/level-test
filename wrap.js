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

    var level = packager(down)

    return function ctor (opts, callback) {
      if (typeof opts === 'function') {
        callback = opts
        opts = null
      }

      opts = xtend(defaults, opts)

      if (defaults.mem) {
        var location = null
      } else {
        location = getLocation()
        if (opts.clean !== false) clean(location, down)
      }

      return level(location, opts, callback)
    }
  }
}
