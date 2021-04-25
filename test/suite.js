'use strict'

const test = require('tape')
const reachdown = require('reachdown')
const packagerTests = require('level-packager/abstract/test')

exports.args = function (level, expectedDown) {
  test('without arguments', function (t) {
    t.plan(3)

    const db = level()

    db.on('open', function () {
      t.ok(reachdown(db) instanceof expectedDown, 'got expected down')
    })

    db.put('foo', 'bar', function (err) {
      t.ifError(err)
      t.notOk(err)
    })
  })

  test('with options and callback', function (t) {
    t.plan(6)

    level({ valueEncoding: 'json' }, function (err, db) {
      t.ifError(err)
      t.ok(db.isOpen())
      t.ok(reachdown(db) instanceof expectedDown, 'got expected down')

      const key = '' + Math.random()
      const value = { test_key: '' + new Date() }

      db.put(key, value, function (err) {
        t.notOk(err)

        db.get(key, function (err, _value) {
          t.ifError(err)
          t.deepEqual(_value, value)
        })
      })
    })
  })

  test('with options', function (t) {
    t.plan(4)

    const db = level({ valueEncoding: 'json' })
    const key = '' + Math.random()
    const value = { test_key: '' + new Date() }

    db.on('open', function () {
      t.ok(reachdown(db) instanceof expectedDown, 'got expected down')
    })

    db.put(key, value, function (err) {
      t.notOk(err)

      db.get(key, function (err, _value) {
        t.ifError(err)
        t.deepEqual(_value, value)
      })
    })
  })

  test('with callback', function (t) {
    t.plan(6)

    level(function (err, db) {
      t.ifError(err)
      t.ok(db.isOpen())
      t.ok(reachdown(db) instanceof expectedDown, 'got expected down')

      db.put('key', 'value', function (err) {
        t.notOk(err)

        db.get('key', function (err, value) {
          t.ifError(err)
          t.is(value, 'value')
        })
      })
    })
  })
}

exports.customLayers = function (level, expectedDown, expectedUp, rawValue) {
  test('custom layers with auto-open', function (t) {
    t.plan(9)

    const ret = level(function (err, db) {
      t.ifError(err)
      t.is(db, ret, 'got db')
      t.ok(reachdown(db) instanceof expectedDown, 'got expected down')
      t.ok(db instanceof expectedUp, 'got expected up')

      db.put('key', 'value', function (err) {
        t.notOk(err)

        db.get('key', { asBuffer: false }, function (err, value) {
          t.ifError(err)
          t.is(value, 'value')
        })

        db.get('key', { valueEncoding: 'id', asBuffer: false }, function (err, value) {
          t.ifError(err)
          t.is(value, rawValue)
        })
      })
    })
  })
}

exports.options = function (levelTest) {
  test('opts precedence', function (t) {
    t.plan(6)

    const level = levelTest({ valueEncoding: 'utf8' })
    const db1 = level()
    const db2 = level({ valueEncoding: 'json' })
    const value = { test: true }

    db1.put('key', value, function (err) {
      t.ifError(err)

      db1.get('key', function (err, value1) {
        t.ifError(err)
        t.is(value1, '[object Object]')
      })
    })

    db2.put('key', value, function (err) {
      t.ifError(err)

      db2.get('key', function (err, value2) {
        t.ifError(err)
        t.deepEqual(value2, value)
      })
    })
  })
}

exports.level = function (level, options) {
  packagerTests(test, level, options)
}
