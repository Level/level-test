'use strict'

var memdown = require('memdown')
var rimraf = require('rimraf')
var mkdirp = require('mkdirp')
var tmpdir = require('osenv').tmpdir()
var path = require('path')
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

function getLocation (name) {
  mkdirp.sync(tmpdir)
  return path.join(tmpdir, name)
}

function clean (location) {
  rimraf.sync(location)
}

module.exports = wrap(getDown, getLocation, clean)
