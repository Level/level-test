# level-test

**Discontinued.**

## Usage

Create a fresh db, without refering to any file system or DOM specifics,
so that the same test can be used in the server or the browser! Use whatever test framework you like.

```js
const level = require('level-test')()
const db = level({ valueEncoding: 'json' })
```

In node it defaults to [`leveldown`][leveldown] for storage, using a unique temporary directory. In the browser it defaults to [`level-js`][level-js].

No database name is needed since `level-test` generates unique random names. For disk-based systems it uses [`tempy`](https://github.com/sindresorhus/tempy#readme) and in the browser it uses [`uuid/v4`](https://github.com/kelektiv/node-uuid#version-4).

```js
const level = require('level-test')()
const db = level()
```

In either environment use of [`memdown`][memdown] can be forced with `options.mem`:

```js
const level = require('level-test')({ mem: true })
const db = level({ valueEncoding: 'json' })
```

Or use [any `abstract-leveldown` compliant store](https://github.com/Level/awesome#stores)! In this case `level-test` assumes the storage is on disk and will thus create a unique temporary directory, unless you pass `mem: true`.

```js
const rocksdb = require('rocksdb')
const level = require('level-test')(rocksdb)
const db = level({ valueEncoding: 'json' })
```

## API

### `ctor = levelTest([store][, options])`

Returns a function `ctor` that creates preconfigured [`levelup`](https://github.com/Level/levelup) instances with temporary storage. The `store` if provided must be a function and [`abstract-leveldown`](https://github.com/Level/abstract-leveldown) compliant. Options:

- `mem`: use `memdown` as `store` (or assume that `store` _is_ `memdown`), default false.
- Any other option will be merged into `ctor` options, the latter taking precedence.

These are equal:

```js
const db1 = require('level-test')({ valueEncoding: 'json' })()
const db2 = require('level-test')()({ valueEncoding: 'json' })
```

### `db = ctor([options][, callback])`

Returns a [`levelup` instance](https://github.com/Level/levelup#api) via [`level-packager`](https://github.com/Level/packager) which wraps the underlying store with [`encoding-down`](https://github.com/Level/encoding-down). In short: the db is functionally equivalent to [`level`](https://github.com/Level/level). You get deferred open, encodings, Promise support, readable streams and more!

Options are passed to [`levelup`](https://github.com/Level/levelup) (which in turn passes them on to the store when opened) as well as [`encoding-down`](https://github.com/Level/encoding-down).

Please refer to the [`levelup` documentation](https://github.com/Level/levelup#levelupdb-options-callback) for usage of the optional `callback`.

## Contributing

[`Level/level-test`](https://github.com/Level/level-test) is an **OPEN Open Source Project**. This means that:

> Individuals making significant and valuable contributions are given commit-access to the project to contribute as they see fit. This project is more like an open wiki than a standard guarded open source project.

See the [Contribution Guide](https://github.com/Level/community/blob/master/CONTRIBUTING.md) for more details.

## License

[MIT](LICENSE)

[leveldown]: https://github.com/Level/leveldown

[memdown]: https://github.com/Level/memdown

[level-js]: https://github.com/Level/level-js
