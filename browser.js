'use strict'

var packager = require('level-packager')
var leveljs = require('level-js')
var memdown = require('memdown')
var xtend = require('xtend')

function wrap (down, parentOpts) {
  var levelup = packager(down)

  return function (loc, opts, cb) {
    opts = xtend(opts, parentOpts)

    if (!parentOpts.mem) {
      loc = loc || 'db_' + Date.now()

      if (opts.clean !== false && typeof down.destroy === 'function') {
        down.destroy(loc, function () {
          // TODO: this must be finished before we open the new db
        })
      }
    }

    // Note: memdown ignores loc
    return levelup(loc, opts, cb)
  }
}

module.exports = function (down, opts) {
  if (typeof down !== 'function') {
    opts = down
    down = null
  }

  opts = xtend(opts)
  down = down || (opts.mem ? memdown : leveljs)

  return wrap(down, opts)
}
