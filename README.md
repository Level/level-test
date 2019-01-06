# level-test

> Inject different level implementations (browser, leveldb, etc) into your tests.

[![level badge][level-badge]](https://github.com/level/awesome)
[![npm](https://img.shields.io/npm/v/level-test.svg?label=&logo=npm)](https://www.npmjs.com/package/level-test)
[![Node version](https://img.shields.io/node/v/level-test.svg)](https://www.npmjs.com/package/level-test)
[![Build Status](https://secure.travis-ci.org/Level/level-test.svg)](http://travis-ci.org/Level/level-test)
[![dependencies](https://david-dm.org/Level/level-test.svg)](https://david-dm.org/level/level-test)
[![Coverage Status](https://coveralls.io/repos/github/Level/level-test/badge.svg)](https://coveralls.io/github/Level/level-test)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Backers on Open Collective](https://opencollective.com/level/backers/badge.svg?color=orange)](#backers)
[![Sponsors on Open Collective](https://opencollective.com/level/sponsors/badge.svg?color=orange)](#sponsors)

**If you are upgrading:** please see [`UPGRADING.md`](UPGRADING.md).

## Usage

Create a fresh db, without refering to any file system or DOM specifics,
so that the same test can be used in the server or the browser! Use whatever test framework you like.

```js
const level = require('level-test')()
const db = level({ valueEncoding: 'json' })
```

In node it defaults to [`leveldown`](https://github.com/level/leveldown) for storage, using a unique temporary directory. If `leveldown` fails to load it falls back to [`memdown`](https://github.com/level/memdown) which is an in-memory store. In the browser it defaults to [`level-js`](https://github.com/level/level.js).

No database name is needed since `level-test` generates unique random names. For disk-based systems it uses [`tempy`](https://github.com/sindresorhus/tempy#readme) and in the browser it uses [`uuid/v4`](https://github.com/kelektiv/node-uuid#version-4).

```js
const level = require('level-test')()
const db = level()
```

In either environment use of [`memdown`](https://github.com/level/memdown) can be forced with `options.mem`:

```js
const level = require('level-test')({ mem: true })
const db = level({ valueEncoding: 'json' })
```

Or use [any `abstract-leveldown` compliant store](https://github.com/Level/awesome#stores)! In this case `level-test` assumes the storage is on disk and will thus create a unique temporary directory.

```js
const rocksdb = require('rocksdb')
const level = require('level-test')(rocksdb)
const db = level({ valueEncoding: 'json' })
```

## API

<a name="factory"></a>
### `ctor = levelTest([store][, options])`

Returns a function `ctor` that creates preconfigured [`levelup`](https://github.com/level/levelup) instances with temporary storage. The `store` if provided must be a function and [`abstract-leveldown`](https://github.com/level/abstract-leveldown) compliant. Options:

- `mem`: use `memdown` as `store`, default false. True implies `clean: false`.
- Any other option will be merged into `ctor` options, the latter taking precedence.

These are equal:

```js
const db1 = require('level-test')({ valueEncoding: 'json' })()
const db2 = require('level-test')()({ valueEncoding: 'json' })
```

<a name="ctor"></a>
### `db = ctor([options][, callback])`

Returns a [`levelup` instance](https://github.com/Level/levelup#api) via [`level-packager`](https://github.com/level/packager) which wraps the underlying store with [`encoding-down`](https://github.com/level/encoding-down). In short: the db is functionally equivalent to [`level`](https://github.com/level/level). You get deferred open, encodings, Promise support, readable streams and more!

Options:

- `clean`: (default true). In the browser this option clears the IndexedDB object store, of if a custom store was provided, calls `store.destroy(location, callback)` if implemented. For disk-based stores, this is a noop.
- Other options are passed to [`levelup`](https://github.com/level/levelup) (which in turn passes them on to the store when opened) as well as [`encoding-down`](https://github.com/level/encoding-down).

Please refer to the [`levelup` documentation](https://github.com/Level/levelup#levelupdb-options-callback) for usage of the optional `callback`.

## Contributing

[`Level/level-test`](https://github.com/Level/level-test) is an **OPEN Open Source Project**. This means that:

> Individuals making significant and valuable contributions are given commit-access to the project to contribute as they see fit. This project is more like an open wiki than a standard guarded open source project.

See the [Contribution Guide](https://github.com/Level/community/blob/master/CONTRIBUTING.md) for more details.

## Donate

To sustain [`Level`](https://github.com/Level) and its activities, become a backer or sponsor on [Open Collective](https://opencollective.com/level). Your logo or avatar will be displayed on our 28+ [GitHub repositories](https://github.com/Level), [npm](https://www.npmjs.com/) packages and (soon) [our website](http://leveldb.org). 💖

### Backers

[![Open Collective backers](https://opencollective.com/level/backers.svg?width=890)](https://opencollective.com/level)

### Sponsors

[![Open Collective sponsors](https://opencollective.com/level/sponsors.svg?width=890)](https://opencollective.com/level)

## License

[MIT](LICENSE.md) © 2013-present Dominic Tarr and [Contributors](CONTRIBUTORS.md).

[level-badge]: http://leveldb.org/img/badge.svg
