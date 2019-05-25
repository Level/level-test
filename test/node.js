'use strict'

var leveldown = require('leveldown')
var memdown = require('memdown')
var jsondown = require('jsondown')
var encode = require('encoding-down')
var levelup = require('levelup')
var levelTest = require('../')
var suite = require('./suite')

suite.args(levelTest(), leveldown)
suite.args(levelTest({ mem: true }), memdown)

// Custom stores
suite.args(levelTest(memdown, { mem: true }), memdown)
suite.args(levelTest(jsondown), jsondown)

// Without encoding-down or levelup
suite.customLayers(levelTest({ mem: true, layers: [] }), memdown, memdown, 'value')
suite.customLayers(levelTest(leveldown, { layers: [] }), leveldown, leveldown, 'value')
suite.customLayers(levelTest({ layers: [encode] }), leveldown, encode, 'value')
suite.customLayers(levelTest({ layers: [encode, levelup] }), leveldown, levelup, 'value')
suite.customLayers(levelTest(memdown, { layers: [levelup], mem: true }), memdown, levelup, 'value')
suite.customLayers(levelTest(memdown, { layers: [encode, { valueEncoding: 'json' }] }), memdown, encode, '"value"')

suite.options(levelTest)
