'use strict'

var leveljs = require('level-js')
var memdown = require('memdown')
var levelTest = require('../')
var suite = require('./suite')

suite.args(levelTest(), leveljs)
suite.args(levelTest({ mem: true }), memdown)

// Custom stores
suite.args(levelTest(memdown, { mem: true }), memdown)
suite.args(levelTest(leveljs), leveljs)

suite.clean(levelTest())
suite.options(levelTest)
