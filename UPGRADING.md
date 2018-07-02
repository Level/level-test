# Upgrade Guide

This document describes breaking changes and how to upgrade. For a complete list of changes including minor and patch releases, please refer to the [changelog](CHANGELOG.md).

## v3

Dropped support for node 0.10.

--------------------

If you are using `level-test` with a custom backend, this API has changed.

If you previously did:

```js
var hyper = require('leveldown-hyper')
var level = require('level-test')({ db: hyper })
var db = level('foo', { encoding: 'json' })
```

You should now do:

```js
var hyper = require('leveldown-hyper')
var level = require('level-test')(hyper)
var db = level('foo', { encoding: 'json' })
```

--------------------

This contains upgrade to `leveldown@~3.0.0` which is based on `abstract-leveldown@~4.0.0` which in turn contains breaking changes to [`.batch()`](https://github.com/Level/abstract-leveldown/commit/a2621ad70571f6ade9d2be42632ece042e068805).

--------------------

Internally this package now depends on `level-packager@2` which in turn is based on `levelup@2` which gives us native Promise support.

```js
var level = require('level-test')()
var db = level()
await db.put('foo', 'bar')
console.log(await db.get('foo'))
```

This does not affect the existing callback API, functionality-wise or performance-wise.

For more information please check the corresponding `CHANGELOG.md` for:

* [`levelup`](https://github.com/Level/levelup/blob/master/CHANGELOG.md)
* [`leveldown`](https://github.com/Level/leveldown/blob/master/CHANGELOG.md)
* [`level-packager`](https://github.com/Level/level-packager/blob/master/CHANGELOG.md)
