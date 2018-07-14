'use strict'

var leveljs = require('level-js')
var timestamp = require('monotonic-timestamp')
var wrap = require('./wrap')

function getDown () {
  return leveljs
}

function getLocation () {
  return 'db_' + timestamp()
}

function clean (location, down) {
  if (typeof down.destroy === 'function') {
    down.destroy(location, function () {
      // TODO: this must be finished before we open the new db
    })
  }
}

module.exports = wrap(getDown, getLocation, clean)
