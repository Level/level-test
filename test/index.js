'use strict'

var test = require('tape')
var leveldown = require('leveldown')
var memdown = require('memdown')
var levelTest = require('../')
var innerDb = require('./util/inner-db')

suite(levelTest(), leveldown)
suite(levelTest({ mem: true }), memdown)

function name () {
  var seq = name.seq = (name.seq || 0) + 1
  return 'level-test-' + seq
}

function suite (level, expectedDown) {
  test('simple', function (t) {
    t.plan(4)

    var db = level(name())
    var key = '' + Math.random()
    var value = '' + new Date()

    db.on('open', function () {
      t.ok(innerDb(db) instanceof expectedDown, 'got expected down')
    })

    db.put(key, value, function (err) {
      t.notOk(err)

      db.get(key, function (err, _value) {
        t.ifError(err)
        t.equal(_value, value)
      })
    })
  })

  test('default name', function (t) {
    t.plan(3)

    var db = level()

    db.on('open', function () {
      t.ok(innerDb(db) instanceof expectedDown, 'got expected down')
    })

    db.put('foo', 'bar', function (err) {
      t.ifError(err)
      t.notOk(err)
    })
  })

  test('options (valueEncoding: json)', function (t) {
    t.plan(4)

    var db = level(name(), { valueEncoding: 'json' })
    var key = '' + Math.random()
    var value = { test_key: '' + new Date() }

    db.on('open', function () {
      t.ok(innerDb(db) instanceof expectedDown, 'got expected down')
    })

    db.put(key, value, function (err) {
      t.notOk(err)

      db.get(key, function (err, _value) {
        t.ifError(err)
        t.deepEqual(_value, value)
      })
    })
  })
}
