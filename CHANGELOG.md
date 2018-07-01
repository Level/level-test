# Changelog

## [Unreleased]

### Changed
* Upgrade `level-js` from `~2.2.4` to `~3.0.0` (@vweevers, @greenkeeper)
* Upgrade `level-packager` from `~2.1.1` to `~4.0.0` (@vweevers, @greenkeeper)
* Upgrade `memdown` from `~2.0.0` to `~3.0.0` (@vweevers, @greenkeeper)
* Upgrade `leveldown` optionalDependency from `~3.0.1` to `~4.0.0` (@vweevers, @greenkeeper)
* Upgrade `airtap` devDependency from `0.0.4` to `0.0.8` (@vweevers, @greenkeeper)
* Tweak copyright years for less maintenance (@ralphtheninja)
* Update repository url (@vweevers)

### Added
* Add `CHANGELOG.md` (@ralphtheninja)

## [3.0.0] - 2018-05-10

### Changed
* Update README style (@ralphtheninja, @vweevers)
* Upgrade `level-js` from `~2.1.6` to `~2.2.4` (@ralphtheninja, @greenkeeper)
* Upgrade `memdown` from `~1.0.0` to `~1.2.4` (@ralphtheninja, @greenkeeper)
* Upgrade `memdown` from `~1.2.4` to `~2.0.0` (@vweevers)
* Upgrade `rimraf` from `~2.3.4` to `~2.6.1` (@ralphtheninja, @greenkeeper)
* Upgrade `tape` devDependency from `~3.0.0` to `~4.8.0` (@ralphtheninja, @greenkeeper)
* Simplify `npm test` (@vweevers)
* Use unique name for each test (@vweevers)
* Use caret for devDependencies (@vweevers)
* Switch to use `level-packager` (@vweevers)
* Merge identical disk and memory tests (@vweevers)
* Refactor browser code and test with `airtap` (@vweevers)
* Change LICENSE to LICENSE.md (@vweevers)
* Make arguments optional (@vweevers)
* Dedup code between node and the browser (@vweevers)

### Added
* Add node 6 and 8 to Travis (@ralphtheninja)
* Add node 9 and 10 to Travis (@vweevers)
* Add `standard` (@vweevers)
* Test that db is backed by `memdown` (@vweevers)
* Test custom store using `jsondown` (@vweevers)

### Removed
* Remove node 0.10 from Travis (@ralphtheninja)
* Remove `level` dependency (@vweevers)
* Remove `levelup` dependency (@vweevers)
* Remove `leveldown` dependency (@vweevers)
* Remove irrelevant encoding option from test (@vweevers)
* Remove `testling` from `package.json` (@vweevers)

### Fixed
* Names in clean tests should be the same (@vweevers)

## [2.0.3] - 2017-04-09

### Changed
* Upgrade `levelup` from `~1.1.1` to `^1.3.3` (@dominictarr)

### Added
* Add `leveldown@^1.5.3` to dependencies (@dominictarr)

### Removed
* Remove `leveldown-hyper` (@dominictarr)

**Historical Note** At this point in time we have `leveldown` as both a dependency and an optional dependency.

## [2.0.2] - 2016-04-07

### Added
* Add `level@^1.4.1` to dependencies (@dominictarr)

## [2.0.1] - 2015-08-25

### Changed
* Change `leveldown` optionalDependency from `~1.2.2` to `^1.2.2` (@dominictarr)

## [2.0.0] - 2015-06-08

### Changed
* Upgrade `rimraf` from `~2.2.6` to `~2.3.4` (@mcollina)
* Upgrade `osenv` from `0.1.0` to `~0.1.1` (@mcollina)
* Upgrade `memdown` from `~0.10.2` to `~1.0.0` (@mcollina)
* Upgrade `levelup` from `~0.19.0` to `~1.1.1` (@mcollina)
* Upgrade `mkdirp` from `~0.5.0` to `~0.5.1` (@mcollina)
* Upgrade `leveldown` optionalDependency from `~0.10.2` to `~1.2.2` (@mcollina)
* Upgrade `leveldown-hyper` devDependency from `~0.10.2` to `~1.0.0` (@mcollina)

## [1.7.0] - 2015-02-23

### Changed
* Allow custom backend for `levelup` (@dominictarr)

### Removed
* Remove node 0.8 from Travis (@dominictarr)

## [1.6.6] - 2014-10-15

### Changed
* Upgrade `level-js` from `~1.0.8` to `~2.1.6` (@mcollina)
* Upgrade `osenv` from `0.0.3` to `0.1.0` (@mcollina)
* Upgrade `memdown` from `~0.6.0` to `~0.10.2` (@mcollina)
* Upgrade `levelup` from `~0.18.2` to `~0.19.0` (@mcollina)
* Upgrade `xtend` from `~2.1.2` to `~4.0.0` (@mcollina)
* Upgrade `tape` devDependency from `~2.4.0` to `~3.0.0` (@mcollina)

## [1.6.5] - 2014-08-24

### Added
* Add `mkdirp` to dependencies (@dominictarr)

## [1.6.4] - 2014-08-24

### Changed
* Use `mkdirp.sync()` on database folder (@dominictarr)

## [1.6.3] - 2014-05-13

### Changed
* Move `leveldown` to optionalDependencies and fallback to `memdown` (@dominictarr)

## [1.6.2] - 2014-03-06

### Fixed
* Support `{ clean: false }` on instance level (@dominictarr)

## [1.6.1] - 2014-01-30

### Changed
* Use `xtend` for options (@brycebaril)
* Upgrade `rimraf` from `~2.2.2` to `~2.2.6` (@brycebaril)
* Upgrade `memdown` from `~0.5.1` to `~0.6.0` (@brycebaril)
* Upgrade `tape` devDependency from `~2.1.0` to `~2.4.0` (@brycebaril)

### Fixed
* Badges should use https (@dominictarr)

## [1.6.0] - 2014-01-20

### Changed
* Use `levelup` and `leveldown` explicity (@dominictarr)

### Removed
* Remove `level` dependency (@dominictarr)

## [1.5.2] - 2013-10-27

### Changed
* Update `.gitignore` (@brycebaril)
* Upgrade `level-js` from `~1.0.3` to `~1.0.8` (@brycebaril)
* Upgrade `rimraf` from `~2.1.4` to `~2.2.2` (@brycebaril)
* Upgrade `level` from `>= 0.12 < 1` to `>= 0.17` (@brycebaril)
* Upgrade `memdown` from `~0.2.0` to `~0.5.1` (@brycebaril)
* Upgrade `tape` devDependency from `~1.0.2` to `~2.1.0` (@brycebaril)

### Fixed
* Fix typo in README (@juliangruber)

## [1.5.1] - 2013-07-29

### Changed
* Bring back `level` instead of `levelup` and `leveldown` (@dominictarr)

## [1.5.0] - 2013-07-23

### Changed
* Run all tests in `testling` (@juliangruber)

### Added
* Add `mem` options to browser version (@juliangruber)
* Test `{ clean: true }` (@juliangruber)
* Add `{ clean: true }` support for `level-js` (@juliangruber)

## [1.4.2] - 2013-07-22

### Changed
* Use `osenv.tmpdir()` instead of `tmpdir` module (@dominictarr)
* Upgrade `levelup` from `~0.10.0` to `~0.11.0` (@juliangruber)
* Downgrade `leveldown` from `~0.6.1` to `~0.5.0` (@juliangruber)

## [1.4.1] - 2013-07-18

### Changed
* Use `tmpdir` module instead of local `tmpdir()` function (@dominictarr)

## [1.4.0] - 2013-07-07

### Added
* Add browser compatibility when using `browserify` (@refset)

## [1.3.0] - 2013-06-15

### Changed
* Depend on `levelup` and `leveldown` instead of `level` (@thlorenz)

### Added
* Add support for using `memdown` via `{ mem: true }` (@thlorenz)

## [1.2.2] - 2013-06-12

### Fixed
* Fix example in README (@mcollina)

## [1.2.1] - 2013-05-31

### Fixed
* Fix shadowed `opts` variable (@dominictarr)

## [1.2.0] - 2013-05-31

### Changed
* Optionally don't clean up the database (@dominictarr)

## [1.1.1] - 2013-05-28

### Removed
* Remove node 0.6 from Travis (@dominictarr)

### Fixed
* Fix problems with `os.tmpdir()` on node 0.8 (@dominictarr)

## [1.1.0] - 2013-05-28

### Added
* Add default name for database (@dominictarr)

## [1.0.1] - 2013-05-28

### Changed
* Update `description` in `package.json` (@dominictarr)

### Removed
* Remove `tap` dependency (@dominictarr)

## 1.0.0 - 2013-05-28

:seedling: Initial release.

[Unreleased]: https://github.com/level/level-test/compare/v3.0.0...HEAD
[3.0.0]: https://github.com/level/level-test/compare/v2.0.3...v3.0.0
[2.0.3]: https://github.com/level/level-test/compare/v2.0.2...v2.0.3
[2.0.2]: https://github.com/level/level-test/compare/v2.0.1...v2.0.2
[2.0.1]: https://github.com/level/level-test/compare/v2.0.0...v2.0.1
[2.0.0]: https://github.com/level/level-test/compare/v1.7.0...v2.0.0
[1.7.0]: https://github.com/level/level-test/compare/v1.6.6...v1.7.0
[1.6.6]: https://github.com/level/level-test/compare/v1.6.5...v1.6.6
[1.6.5]: https://github.com/level/level-test/compare/v1.6.4...v1.6.5
[1.6.4]: https://github.com/level/level-test/compare/v1.6.3...v1.6.4
[1.6.3]: https://github.com/level/level-test/compare/v1.6.2...v1.6.3
[1.6.2]: https://github.com/level/level-test/compare/v1.6.1...v1.6.2
[1.6.1]: https://github.com/level/level-test/compare/v1.6.0...v1.6.1
[1.6.0]: https://github.com/level/level-test/compare/v1.5.2...v1.6.0
[1.5.2]: https://github.com/level/level-test/compare/v1.5.1...v1.5.2
[1.5.1]: https://github.com/level/level-test/compare/v1.5.0...v1.5.1
[1.5.0]: https://github.com/level/level-test/compare/v1.4.2...v1.5.0
[1.4.2]: https://github.com/level/level-test/compare/v1.4.1...v1.4.2
[1.4.1]: https://github.com/level/level-test/compare/v1.4.0...v1.4.1
[1.4.0]: https://github.com/level/level-test/compare/v1.3.0...v1.4.0
[1.3.0]: https://github.com/level/level-test/compare/v1.2.2...v1.3.0
[1.2.2]: https://github.com/level/level-test/compare/v1.2.1...v1.2.2
[1.2.1]: https://github.com/level/level-test/compare/v1.2.0...v1.2.1
[1.2.0]: https://github.com/level/level-test/compare/v1.1.1...v1.2.0
[1.1.1]: https://github.com/level/level-test/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/level/level-test/compare/v1.0.1...v1.1.0
[1.0.1]: https://github.com/level/level-test/compare/v1.0.0...v1.0.1

