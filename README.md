# level-test

inject different level implementations (browser, leveldb, etc) into your tests.

[![travis](https://travis-ci.org/dominictarr/level-test.png?branch=master)
](https://travis-ci.org/dominictarr/level-test)

[![testling](https://ci.testling.com/dominictarr/level-test.png)
](https://ci.testling.com/dominictarr/level-test)


## Example

Create a fresh db, with out refering to any fs or dom specifics,
so that the same test can be used in the server or the browser!
``` js

var level = require('level-test')()

var db = level('foo', {encoding: 'json'}) 
```

## In Memory Example

``` js

var level = require('level-test')( { mem: true })

var db = level('foo', {encoding: 'json'}) 
```

use whatever test framework you like!

## options
currently supported options:

``` js
level(name, {
  clean: false //do not delete database (defaults to true)
})

```

## TODO

configure leveldb settings via command line options/enviroment vars.


## License

MIT
