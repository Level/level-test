'use strict'

var leveljs = require('level-js')
var wrap = require('./wrap')
var uuid = require('uuid/v4')

function getDown () {
  return leveljs
}

function getLocation () {
  return uuid()
}

function clean (location, down) {
  if (typeof down.destroy === 'function') {
    down.destroy(location, function () {
      // TODO: this must be finished before we open the new db
    })
  }
}

module.exports = wrap(getDown, getLocation, clean)
