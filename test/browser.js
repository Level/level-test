'use strict'

const leveljs = require('level-js')
const memdown = require('memdown')
const encode = require('encoding-down')
const levelup = require('levelup')
const levelTest = require('../')
const suite = require('./suite')

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

// Test parity with level(-mem)
suite.level(levelTest(), {
  skipErrorIfExistsTest: true,
  skipRepairTest: true,
  skipDestroyTest: true
})

suite.level(levelTest({ mem: true }), {
  nonPersistent: true,
  skipErrorIfExistsTest: true,
  skipRepairTest: true,
  skipDestroyTest: true
})
