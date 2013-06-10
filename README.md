# level-test

inject different level implementations (browser, leveldb, etc) into your tests.

[![travis](https://travis-ci.org/dominictarr/level-test.png?branch=master)
](https://travis-ci.org/dominictarr/level-test)

[![testling](http://ci.testling.com/dominictarr/level-test.png)
](http://ci.testling.com/dominictarr/level-test)


## Example

Create a fresh db, with out refering to any fs or dom specifics,
so that the same test can be used in the server or the browser!
``` js

var level = require('level-test')()

var db = level('foo', {encoding: 'json'}) 
```

use whatever test framework you like!

## TODO

configure leveldb settings via command line options/enviroment vars,
and make a browser implementation.


## License

MIT
