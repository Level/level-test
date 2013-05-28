var level = require('level')
var rimraf = require('rimraf')
var os = require('os')
var path = require('path')

function tmpdir () {
  return os.tmpdir ? os.tmpdir() : process.env.TMPDIR
}

module.exports = function () {

  return function (name, opts, cb) {
    name = name || 'db_' + Date.now()
    var dir = path.join(tmpdir(), name)
    rimraf.sync(dir)
    return level(dir, opts, cb)
  }

}

