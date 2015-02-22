var level = require('../')()
var test = require('tape')
var hyper = require('leveldown-hyper')

test('simple', function (t) {
  var db = level('level-test', {encoding: 'json'})
  var key = ''+Math.random()
  var value = '' + new Date()

  db.put(key, value, function (err) {
    t.notOk(err)

    db.get(key, function (err, _value) {
      t.equal(_value, value)
      t.end()
    })
  })
})

test('default name', function (t) {
  var db = level()
  db.put('foo', 'bar', function (err) {
    t.notOk(err)
    t.end()
  })
})

test('options (valueEncoding: json)', function (t) {
  var db = level('level-test2', {valueEncoding: 'json'})
  var key = ''+Math.random()
  var value = {test_key: '' + new Date()}

  db.put(key, value, function (err) {
    t.notOk(err)

    db.get(key, function (err, _value) {
      t.deepEqual(_value, value)
      t.end()
    })
  })
})

test('custom backend for levelup', function (t) {
  var db = level('level-test3', { db: hyper })
  var key = 'foo'
  var value = 'bar'

  db.put(key, value, function (err) {
    t.notOk(err)
    db.get(key, function (err, _value) {
      t.equal(_value, value)
      db.db.liveBackup('baz', function (err) {
        t.notOk(err, 'liveBackup worked')
        t.end()
      })
    })
  })
})
