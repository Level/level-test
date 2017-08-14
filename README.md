# level-test

<img alt="LevelDB Logo" height="100" src="http://leveldb.org/img/logo.svg">

> Inject different level implementations (browser, leveldb, etc) into your tests.

[![Build Status](https://travis-ci.org/Level/level-test.svg?branch=master)](https://travis-ci.org/Level/level-test)
[![Greenkeeper badge](https://badges.greenkeeper.io/Level/level-test.svg)](https://greenkeeper.io/)

[![testling](https://ci.testling.com/dominictarr/level-test.png)
](https://ci.testling.com/dominictarr/level-test)

## Example

Create a fresh db, with out refering to any fs or dom specifics,
so that the same test can be used in the server or the browser!

``` js
const level = require('level-test')()
const db = level('foo', { encoding: 'json' })
```

## In Memory Example

``` js
const level = require('level-test')({ mem: true })
const db = level('foo', { encoding: 'json' })
```

Use whatever test framework you like!

## Custom Backends

A custom backend for `levelup` can be provided via the options object:

```js
const hyper = require('leveldown-hyper')
const level = require('level-test')({ db: hyper })
const db = level('foo', { encoding: 'json' })
```

## Options

Currently supported options:

``` js
level(name, {
  clean: false, // do not delete database (defaults to true)
  db: require('leveldown-hyper') // optional, defaults to leveldown
})
```

## TODO

Configure leveldb settings via command line options/environment vars.

## License

MIT
