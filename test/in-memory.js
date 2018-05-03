var level = require('../')({ mem: true })
var memdown = require('memdown')
var test = require('tape')

test('simple', function (t) {
  t.plan(4)

  var db = level('level-test-simple-mem', {encoding: 'json'})
  var key = '' + Math.random()
  var value = '' + new Date()

  db.on('open', function () {
    t.ok(innerDb(db) instanceof memdown, 'backed by memdown')
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
    t.ok(innerDb(db) instanceof memdown, 'backed by memdown')
  })

  db.put('foo', 'bar', function (err) {
    t.ifError(err)
    t.notOk(err)
  })
})

function innerDb (db) {
  while (db.db) db = db.db
  return db
}
