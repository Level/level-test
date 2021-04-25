'use strict'

const compose = require('level-compose')
const leveldown = require('leveldown')
const memdown = require('memdown')
const encode = require('encoding-down')
const levelup = require('levelup')
const getLocation = require('./location')

module.exports = function factory (down, defaults) {
  if (typeof down !== 'function') {
    defaults = down
    down = null
  }

  defaults = defaults || {}
  down = down || (defaults.mem ? memdown : leveldown)

  // The layers option is experimental and undocumented. Use at your own risk.
  const layers = defaults.layers || [encode, levelup]
  const shell = compose([locationFallback, down, layers], defaults)

  return shell
}

function locationFallback (location, options) {
  return location || (options.mem ? null : getLocation())
}
