# Upgrade Guide

This document describes breaking changes and how to upgrade. For a complete list of changes including minor and patch releases, please refer to the [changelog](CHANGELOG.md).

## v7

Dropped node 6 and removed the defunct `clean` option.

## v6

Upgraded to `leveldown@5`, `level-js@4` and `memdown@4`, now all based on `abstract-leveldown@6`. For more information please see:

- [`leveldown/UPGRADING.md`](https://github.com/Level/leveldown/blob/master/UPGRADING.md)
- [`level-js/UPGRADING.md`](https://github.com/Level/level-js/blob/master/UPGRADING.md)
- [`memdown/UPGRADING.md`](https://github.com/Level/memdown/blob/master/UPGRADING.md)
- [`abstract-leveldown/UPGRADING.md`](https://github.com/Level/abstract-leveldown/blob/master/UPGRADING.md).

Please note that `leveldown` (which is an optional dependency) now requires node >= 8.6.0.

## v5

Dropped node 9 and removed `name` parameter from constructor in favor of randomly generated unique names. If you previously did:

```js
const level = require('level-test')()
const db = level('foo', { valueEncoding: 'json' })
```

You must now do:

```js
const level = require('level-test')()
const db = level({ valueEncoding: 'json' })
```

## v4

We updated `level-js` to `v3.0.0` with changes to browser support, which warranted a new major version.

For more information please see:

- [`level-js/UPGRADING.md`](https://github.com/Level/level-js/blob/master/UPGRADING.md)
- [`level-js/CHANGELOG.md`](https://github.com/Level/level-js/blob/master/CHANGELOG.md)

## v3

Dropped support for node 0.10.

* * *

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

* * *

This contains upgrade to `leveldown@~3.0.0` which is based on `abstract-leveldown@~4.0.0` which in turn contains breaking changes to [`.batch()`](https://github.com/Level/abstract-leveldown/commit/a2621ad70571f6ade9d2be42632ece042e068805).

* * *

Internally this package now depends on `level-packager@2` which in turn is based on `levelup@2` which gives us native Promise support.

```js
var level = require('level-test')()
var db = level()
await db.put('foo', 'bar')
console.log(await db.get('foo'))
```

This does not affect the existing callback API, functionality-wise or performance-wise.

For more information please check the corresponding `CHANGELOG.md` for:

- [`levelup`](https://github.com/Level/levelup/blob/master/CHANGELOG.md)
- [`leveldown`](https://github.com/Level/leveldown/blob/master/CHANGELOG.md)
- [`level-packager`](https://github.com/Level/level-packager/blob/master/CHANGELOG.md)
