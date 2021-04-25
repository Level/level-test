'use strict'

const leveldown = require('leveldown')
const memdown = require('memdown')
const jsondown = require('jsondown')
const encode = require('encoding-down')
const levelup = require('levelup')
const levelTest = require('../')
const suite = require('./suite')

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

// Test parity with level(-mem)
suite.level(levelTest())
suite.level(levelTest({ mem: true }), {
  nonPersistent: true,
  skipErrorIfExistsTest: true,
  skipRepairTest: true,
  skipDestroyTest: true
})
