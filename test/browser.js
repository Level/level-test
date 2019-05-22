'use strict'

var leveljs = require('level-js')
var memdown = require('memdown')
var encode = require('encoding-down')
var levelup = require('levelup')
var levelTest = require('../')
var suite = require('./suite')

suite.args(levelTest(), leveljs)
suite.args(levelTest({ mem: true }), memdown)

// Custom stores
suite.args(levelTest(memdown, { mem: true }), memdown)
suite.args(levelTest(leveljs), leveljs)

// Without encoding-down or levelup
suite.customLayers(levelTest({ mem: true, layers: [] }), memdown, memdown, 'value')
suite.customLayers(levelTest(leveljs, { layers: [] }), leveljs, leveljs, 'value')
suite.customLayers(levelTest({ layers: [encode] }), leveljs, encode, 'value')
suite.customLayers(levelTest({ layers: [encode, levelup] }), leveljs, levelup, 'value')
suite.customLayers(levelTest(memdown, { layers: [levelup], mem: true }), memdown, levelup, 'value')
suite.customLayers(levelTest(memdown, { layers: [encode, { valueEncoding: 'json' }] }), memdown, encode, '"value"')

suite.options(levelTest)
