'use strict'

var memdown = require('memdown')
var rimraf = require('rimraf')
var tempy = require('tempy')
var wrap = require('./wrap')

function getDown (defaults) {
  try {
    return require('leveldown')
  } catch (err) {
    console.error('could not require leveldown, fallback to memdown')
    defaults.mem = true
    return memdown
  }
}

function getLocation () {
  return tempy.directory()
}

function clean (location) {
  rimraf.sync(location)
}

module.exports = wrap(getDown, getLocation, clean)
