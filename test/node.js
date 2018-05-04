'use strict'

var leveldown = require('leveldown')
var memdown = require('memdown')
var jsondown = require('jsondown')
var levelTest = require('../')
var suite = require('./suite')

suite.args(levelTest(), leveldown)
suite.args(levelTest({ mem: true }), memdown)

// Custom stores
suite.args(levelTest(memdown, { mem: true }), memdown)
suite.args(levelTest(jsondown), jsondown)

suite.clean(levelTest())
suite.options(levelTest)
