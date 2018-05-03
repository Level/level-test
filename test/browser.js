'use strict'

var leveljs = require('level-js')
var memdown = require('memdown')
var levelTest = require('../')
var suite = require('./suite')

suite(levelTest(), leveljs)
suite(levelTest({ mem: true }), memdown)

// Custom stores
suite(levelTest(memdown, { mem: true }), memdown)
suite(levelTest(leveljs), leveljs)
