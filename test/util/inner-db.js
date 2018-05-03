'use strict'

module.exports = function (db) {
  while (db.db) db = db.db
  return db
}
