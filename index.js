'use strict'

var compose = require('level-compose')
var leveldown = require('leveldown')
var memdown = require('memdown')
var encode = require('encoding-down')
var levelup = require('levelup')
var getLocation = require('./location')

module.exports = function factory (down, defaults) {
  if (typeof down !== 'function') {
    defaults = down
    down = null
  }

  defaults = defaults || {}
  down = down || (defaults.mem ? memdown : leveldown)

  // The layers option is experimental and undocumented. Use at your own risk.
  var layers = defaults.layers || [encode, levelup]
  var shell = compose([locationFallback, down, layers], defaults)

  return shell
}

function locationFallback (location, options) {
  return location || (options.mem ? null : getLocation())
}
