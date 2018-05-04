'use strict'

var leveljs = require('level-js')
var wrap = require('./wrap')

function getDown () {
  return leveljs
}

function getLocation (name) {
  return name
}

function clean (location, down) {
  if (typeof down.destroy === 'function') {
    down.destroy(location, function () {
      // TODO: this must be finished before we open the new db
    })
  }
}

module.exports = wrap(getDown, getLocation, clean)
