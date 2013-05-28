var level = require('level')
var rimraf = require('rimraf')
var os = require('os')
var path = require('path')

module.exports = function () {

  return function (name, opts, cb) {
    var dir = path.join(os.tmpdir(), name)
    rimraf.sync(dir)
    return level(dir, opts, cb)
  }

}

