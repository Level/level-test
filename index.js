var levelup = require('levelup')
var rimraf = require('rimraf')
var os = require('os')
var path = require('path')

function tmpdir () {
  return os.tmpdir ? os.tmpdir() : process.env.TMPDIR
}

module.exports = function (opts) {
  opts = opts || {}
  return function (name, _opts, cb) {
    name = name || 'db_' + Date.now()
    var dir = path.join(tmpdir(), name)
    if(opts.clean !== false)
      rimraf.sync(dir)

    return levelup(dir, _opts, cb);
  }

}

