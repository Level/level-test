# level-test

> Inject different level implementations (browser, leveldb, etc) into your tests.

[![level badge][level-badge]](https://github.com/level/awesome)
[![npm](https://img.shields.io/npm/v/level-test.svg)](https://www.npmjs.com/package/level-test)
![Node version](https://img.shields.io/node/v/level-test.svg)
[![Build Status](https://secure.travis-ci.org/Level/level-test.svg)](http://travis-ci.org/Level/level-test)
[![dependencies](https://david-dm.org/Level/level-test.svg)](https://david-dm.org/level/level-test)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Example

Create a fresh db, without refering to any fs or dom specifics,
so that the same test can be used in the server or the browser!

``` js
const level = require('level-test')()
const db = level('foo', { valueEncoding: 'json' })
```

## In Memory Example

``` js
const level = require('level-test')({ mem: true })
const db = level('foo', { valueEncoding: 'json' })
```

Use whatever test framework you like!

## Custom Stores

A [custom `abstract-leveldown` compliant store](https://github.com/Level/awesome#stores) can be provided:

```js
const hyper = require('leveldown-hyper')
const level = require('level-test')(hyper)
const db = level('foo', { valueEncoding: 'json' })
```

## Options

Currently supported options:

``` js
level(name, {
  clean: false // do not delete database (defaults to true)
})
```

## TODO

Configure leveldb settings via command line options/environment vars.

## Contributing

`level-test` is an **OPEN Open Source Project**. This means that:

> Individuals making significant and valuable contributions are given commit-access to the project to contribute as they see fit. This project is more like an open wiki than a standard guarded open source project.

See the [contribution guide](https://github.com/Level/community/blob/master/CONTRIBUTING.md) for more details.

## License

Copyright &copy; 2013-2018 Dominic Tarr and [Level contributors](https://github.com/level/community#contributors).

`level-test` is licensed under the MIT license. All rights not explicitly granted in the MIT license are reserved. See the included [`LICENSE.md`](./LICENSE.md) file for more details.

[level-badge]: http://leveldb.org/img/badge.svg
