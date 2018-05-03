var level = require('../')()
var test = require('tape')

test('simple', function (t) {
  var db = level('level-test-simple', {encoding: 'json'})
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
  var db = level('level-test-options', {valueEncoding: 'json'})
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
