'use strict'

var test = require('tape')
var defaultLevel = require('../')()

function name () {
  var seq = name.seq = (name.seq || 0) + 1
  return 'level-test-' + seq
}

function innerDb (db) {
  while (db.db) db = db.db
  return db
}

test('clean', function (t) {
  t.plan(5)

  var loc = name()
  var db = defaultLevel(loc, { clean: true })

  db.get('foo', function (err) {
    t.ok(err)

    db.put('foo', 'bar', function (err) {
      t.error(err)

      db.get('foo', function (err) {
        t.notOk(err)

        db.close(function (err) {
          t.error(err)

          var db2 = defaultLevel(loc, { clean: true })
          db2.get('foo', function (err) {
            t.ok(err)
          })
        })
      })
    })
  })
})

module.exports = function suite (level, expectedDown) {
  test('with name', function (t) {
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

  test('without arguments', function (t) {
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

  test('with name and options (valueEncoding: json)', function (t) {
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

  test('with name, options and callback', function (t) {
    t.plan(6)

    level(name(), { valueEncoding: 'json' }, function (err, db) {
      t.ifError(err)
      t.ok(db.isOpen())
      t.ok(innerDb(db) instanceof expectedDown, 'got expected down')

      var key = '' + Math.random()
      var value = { test_key: '' + new Date() }

      db.put(key, value, function (err) {
        t.notOk(err)

        db.get(key, function (err, _value) {
          t.ifError(err)
          t.deepEqual(_value, value)
        })
      })
    })
  })

  test('with name and callback', function (t) {
    t.plan(6)

    level(name(), function (err, db) {
      t.ifError(err)
      t.ok(db.isOpen())
      t.ok(innerDb(db) instanceof expectedDown, 'got expected down')

      db.put('key', 'value', function (err) {
        t.notOk(err)

        db.get('key', function (err, value) {
          t.ifError(err)
          t.is(value, 'value')
        })
      })
    })
  })

  test('with callback', function (t) {
    t.plan(6)

    level(function (err, db) {
      t.ifError(err)
      t.ok(db.isOpen())
      t.ok(innerDb(db) instanceof expectedDown, 'got expected down')

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
