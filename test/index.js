var level = require('../')()
var test = require('tape')

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

