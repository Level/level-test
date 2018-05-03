'use strict'

var leveldown = require('leveldown')
var memdown = require('memdown')
var jsondown = require('jsondown')
var levelTest = require('../')
var suite = require('./suite')

suite(levelTest(), leveldown)
suite(levelTest({ mem: true }), memdown)

// Custom stores
suite(levelTest(memdown, { mem: true }), memdown)
suite(levelTest(jsondown), jsondown)
