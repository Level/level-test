var level = require('../')()
var test = require('tape')

test('clean', function (t) {
  t.plan(5)

  var db = level('level-test', { clean: true })

  db.get('foo', function (err) {
    t.ok(err)
    
    db.put('foo', 'bar', function (err) {
      t.error(err)

      db.get('foo', function (err) {
        t.notOk(err)

        db.close(function (err) {
          t.error(err)

          var db2 = level('level-test', { clean: true })
          db2.get('foo', function (err) {
            t.ok(err)
          })
        })
      })
    })
  })
})
