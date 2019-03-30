# Changelog

_**If you are upgrading:** please see [`UPGRADING.md`](UPGRADING.md)._

## [Unreleased][unreleased]

## [6.0.0] - 2019-03-30

### Changed

- Upgrade `memdown` from `~3.0.0` to `~4.0.0` ([`372f8c5`](https://github.com/Level/level-test/commit/372f8c5)) ([**@vweevers**](https://github.com/vweevers))
- Upgrade `leveldown` from `~4.0.0` to `~5.0.0` ([#108](https://github.com/Level/level-test/issues/108)) ([**@vweevers**](https://github.com/vweevers))
- Upgrade `level-packager` from `~4.0.0` to `~5.0.0` ([#100](https://github.com/Level/level-test/issues/100)) ([**@vweevers**](https://github.com/vweevers))
- Upgrade `level-js` from `~3.0.0` to `~4.0.0` ([#103](https://github.com/Level/level-test/issues/103)) ([**@vweevers**](https://github.com/vweevers))
- Apply common project tweaks ([#105](https://github.com/Level/level-test/issues/105), [#106](https://github.com/Level/level-test/issues/106)) ([**@vweevers**](https://github.com/vweevers))
- Upgrade `standard` devDependency from `^11.0.0` to `^12.0.0` ([#98](https://github.com/Level/level-test/issues/98)) ([**@vweevers**](https://github.com/vweevers))
- Upgrade `airtap` devDependency from `0.1.0` to `^2.0.0` ([#102](https://github.com/Level/level-test/issues/102)) ([**@vweevers**](https://github.com/vweevers))
- Update `abstract-leveldown` devDependency from `^5.0.0` to `^6.0.0` ([#99](https://github.com/Level/level-test/issues/99)) ([**@ralphtheninja**](https://github.com/ralphtheninja))

### Added

- Add `nyc` and `coveralls` ([#97](https://github.com/Level/level-test/issues/97), [#107](https://github.com/Level/level-test/issues/107)) ([**@ralphtheninja**](https://github.com/ralphtheninja), [**@vweevers**](https://github.com/vweevers))

## [5.0.0] - 2018-07-14

### Changed

- Upgrade `airtap` devDependency from `0.0.8` to `0.1.0` ([**@vweevers**](https://github.com/vweevers))
- Use `tempy` and `uuid` to generate random names ([#94](https://github.com/Level/level-test/issues/94)) ([**@ralphtheninja**](https://github.com/ralphtheninja))

### Removed

- Remove node 9 from Travis ([**@ralphtheninja**](https://github.com/ralphtheninja))
- Remove `name` parameter from constructor ([#94](https://github.com/Level/level-test/issues/94)) ([**@ralphtheninja**](https://github.com/ralphtheninja))

## [4.0.0] - 2018-07-02

### Changed

- Upgrade `level-js` from `~2.2.4` to `~3.0.0` ([**@vweevers**](https://github.com/vweevers), [**@greenkeeper**](https://github.com/greenkeeper))
- Upgrade `level-packager` from `~2.1.1` to `~4.0.0` ([**@vweevers**](https://github.com/vweevers), [**@greenkeeper**](https://github.com/greenkeeper))
- Upgrade `memdown` from `~2.0.0` to `~3.0.0` ([**@vweevers**](https://github.com/vweevers), [**@greenkeeper**](https://github.com/greenkeeper))
- Upgrade `leveldown` optionalDependency from `~3.0.1` to `~4.0.0` ([**@vweevers**](https://github.com/vweevers), [**@greenkeeper**](https://github.com/greenkeeper))
- Upgrade `airtap` devDependency from `0.0.4` to `0.0.8` ([**@vweevers**](https://github.com/vweevers), [**@greenkeeper**](https://github.com/greenkeeper))
- Tweak copyright years for less maintenance ([**@ralphtheninja**](https://github.com/ralphtheninja))
- Update repository url ([**@vweevers**](https://github.com/vweevers))

### Added

- Add `CHANGELOG.md` ([**@ralphtheninja**](https://github.com/ralphtheninja))
- Add `UPGRADING.md` ([**@ralphtheninja**](https://github.com/ralphtheninja))

## [3.0.0] - 2018-05-10

### Changed

- Update README style ([**@ralphtheninja**](https://github.com/ralphtheninja), [**@vweevers**](https://github.com/vweevers))
- Upgrade `level-js` from `~2.1.6` to `~2.2.4` ([**@ralphtheninja**](https://github.com/ralphtheninja), [**@greenkeeper**](https://github.com/greenkeeper))
- Upgrade `memdown` from `~1.0.0` to `~2.0.0` ([**@ralphtheninja**](https://github.com/ralphtheninja), [**@vweevers**](https://github.com/vweevers), [**@greenkeeper**](https://github.com/greenkeeper))
- Upgrade `rimraf` from `~2.3.4` to `~2.6.1` ([**@ralphtheninja**](https://github.com/ralphtheninja), [**@greenkeeper**](https://github.com/greenkeeper))
- Upgrade `tape` devDependency from `~3.0.0` to `~4.8.0` ([**@ralphtheninja**](https://github.com/ralphtheninja), [**@greenkeeper**](https://github.com/greenkeeper))
- Simplify `npm test` ([**@vweevers**](https://github.com/vweevers))
- Use unique name for each test ([**@vweevers**](https://github.com/vweevers))
- Use caret for devDependencies ([**@vweevers**](https://github.com/vweevers))
- Switch to use `level-packager` ([**@vweevers**](https://github.com/vweevers))
- Merge identical disk and memory tests ([**@vweevers**](https://github.com/vweevers))
- Refactor browser code and test with `airtap` ([**@vweevers**](https://github.com/vweevers))
- Change LICENSE to LICENSE.md ([**@vweevers**](https://github.com/vweevers))
- Make arguments optional ([**@vweevers**](https://github.com/vweevers))
- Dedup code between node and the browser ([**@vweevers**](https://github.com/vweevers))

### Added

- Add node 6 and 8 to Travis ([**@ralphtheninja**](https://github.com/ralphtheninja))
- Add node 9 and 10 to Travis ([**@vweevers**](https://github.com/vweevers))
- Add `standard` ([**@vweevers**](https://github.com/vweevers))
- Test that db is backed by `memdown` ([**@vweevers**](https://github.com/vweevers))
- Test custom store using `jsondown` ([**@vweevers**](https://github.com/vweevers))

### Removed

- Remove node 0.10 from Travis ([**@ralphtheninja**](https://github.com/ralphtheninja))
- Remove `level` dependency ([**@vweevers**](https://github.com/vweevers))
- Remove `levelup` dependency ([**@vweevers**](https://github.com/vweevers))
- Remove `leveldown` dependency ([**@vweevers**](https://github.com/vweevers))
- Remove irrelevant encoding option from test ([**@vweevers**](https://github.com/vweevers))
- Remove `testling` from `package.json` ([**@vweevers**](https://github.com/vweevers))

## [2.0.3] - 2017-04-09

### Changed

- Upgrade `levelup` from `~1.1.1` to `^1.3.3` ([**@dominictarr**](https://github.com/dominictarr))

### Added

- Add `leveldown@^1.5.3` to dependencies ([**@dominictarr**](https://github.com/dominictarr))

### Removed

- Remove `leveldown-hyper` ([**@dominictarr**](https://github.com/dominictarr))

**Historical Note** At this point in time we have `leveldown` as both a dependency and an optional dependency.

## [2.0.2] - 2016-04-07

### Added

- Add `level@^1.4.1` to dependencies ([**@dominictarr**](https://github.com/dominictarr))

## [2.0.1] - 2015-08-25

### Changed

- Change `leveldown` optionalDependency from `~1.2.2` to `^1.2.2` ([**@dominictarr**](https://github.com/dominictarr))

## [2.0.0] - 2015-06-08

### Changed

- Upgrade `rimraf` from `~2.2.6` to `~2.3.4` ([**@mcollina**](https://github.com/mcollina))
- Upgrade `osenv` from `0.1.0` to `~0.1.1` ([**@mcollina**](https://github.com/mcollina))
- Upgrade `memdown` from `~0.10.2` to `~1.0.0` ([**@mcollina**](https://github.com/mcollina))
- Upgrade `levelup` from `~0.19.0` to `~1.1.1` ([**@mcollina**](https://github.com/mcollina))
- Upgrade `mkdirp` from `~0.5.0` to `~0.5.1` ([**@mcollina**](https://github.com/mcollina))
- Upgrade `leveldown` optionalDependency from `~0.10.2` to `~1.2.2` ([**@mcollina**](https://github.com/mcollina))
- Upgrade `leveldown-hyper` devDependency from `~0.10.2` to `~1.0.0` ([**@mcollina**](https://github.com/mcollina))

## [1.7.0] - 2015-02-23

### Changed

- Allow custom backend for `levelup` ([**@dominictarr**](https://github.com/dominictarr))

### Removed

- Remove node 0.8 from Travis ([**@dominictarr**](https://github.com/dominictarr))

## [1.6.6] - 2014-10-15

### Changed

- Upgrade `level-js` from `~1.0.8` to `~2.1.6` ([**@mcollina**](https://github.com/mcollina))
- Upgrade `osenv` from `0.0.3` to `0.1.0` ([**@mcollina**](https://github.com/mcollina))
- Upgrade `memdown` from `~0.6.0` to `~0.10.2` ([**@mcollina**](https://github.com/mcollina))
- Upgrade `levelup` from `~0.18.2` to `~0.19.0` ([**@mcollina**](https://github.com/mcollina))
- Upgrade `xtend` from `~2.1.2` to `~4.0.0` ([**@mcollina**](https://github.com/mcollina))
- Upgrade `tape` devDependency from `~2.4.0` to `~3.0.0` ([**@mcollina**](https://github.com/mcollina))

## [1.6.5] - 2014-08-24

### Added

- Add `mkdirp` to dependencies ([**@dominictarr**](https://github.com/dominictarr))

## [1.6.4] - 2014-08-24

### Changed

- Use `mkdirp.sync()` on database folder ([**@dominictarr**](https://github.com/dominictarr))

## [1.6.3] - 2014-05-13

### Changed

- Move `leveldown` to optionalDependencies and fallback to `memdown` ([**@dominictarr**](https://github.com/dominictarr))

## [1.6.2] - 2014-03-06

### Fixed

- Support `{ clean: false }` on instance level ([**@dominictarr**](https://github.com/dominictarr))

## [1.6.1] - 2014-01-30

### Changed

- Use `xtend` for options ([**@brycebaril**](https://github.com/brycebaril))
- Upgrade `rimraf` from `~2.2.2` to `~2.2.6` ([**@brycebaril**](https://github.com/brycebaril))
- Upgrade `memdown` from `~0.5.1` to `~0.6.0` ([**@brycebaril**](https://github.com/brycebaril))
- Upgrade `tape` devDependency from `~2.1.0` to `~2.4.0` ([**@brycebaril**](https://github.com/brycebaril))

### Fixed

- Badges should use https ([**@dominictarr**](https://github.com/dominictarr))

## [1.6.0] - 2014-01-20

### Changed

- Use `levelup` and `leveldown` explicity ([**@dominictarr**](https://github.com/dominictarr))

### Removed

- Remove `level` dependency ([**@dominictarr**](https://github.com/dominictarr))

## [1.5.2] - 2013-10-27

### Changed

- Update `.gitignore` ([**@brycebaril**](https://github.com/brycebaril))
- Upgrade `level-js` from `~1.0.3` to `~1.0.8` ([**@brycebaril**](https://github.com/brycebaril))
- Upgrade `rimraf` from `~2.1.4` to `~2.2.2` ([**@brycebaril**](https://github.com/brycebaril))
- Upgrade `level` from `>= 0.12 < 1` to `>= 0.17` ([**@brycebaril**](https://github.com/brycebaril))
- Upgrade `memdown` from `~0.2.0` to `~0.5.1` ([**@brycebaril**](https://github.com/brycebaril))
- Upgrade `tape` devDependency from `~1.0.2` to `~2.1.0` ([**@brycebaril**](https://github.com/brycebaril))

### Fixed

- Fix typo in README ([**@juliangruber**](https://github.com/juliangruber))

## [1.5.1] - 2013-07-29

### Changed

- Bring back `level` instead of `levelup` and `leveldown` ([**@dominictarr**](https://github.com/dominictarr))

## [1.5.0] - 2013-07-23

### Changed

- Run all tests in `testling` ([**@juliangruber**](https://github.com/juliangruber))

### Added

- Add `mem` options to browser version ([**@juliangruber**](https://github.com/juliangruber))
- Test `{ clean: true }` ([**@juliangruber**](https://github.com/juliangruber))
- Add `{ clean: true }` support for `level-js` ([**@juliangruber**](https://github.com/juliangruber))

## [1.4.2] - 2013-07-22

### Changed

- Use `osenv.tmpdir()` instead of `tmpdir` module ([**@dominictarr**](https://github.com/dominictarr))
- Upgrade `levelup` from `~0.10.0` to `~0.11.0` ([**@juliangruber**](https://github.com/juliangruber))
- Downgrade `leveldown` from `~0.6.1` to `~0.5.0` ([**@juliangruber**](https://github.com/juliangruber))

## [1.4.1] - 2013-07-18

### Changed

- Use `tmpdir` module instead of local `tmpdir()` function ([**@dominictarr**](https://github.com/dominictarr))

## [1.4.0] - 2013-07-07

### Added

- Add browser compatibility when using `browserify` ([**@refset**](https://github.com/refset))

## [1.3.0] - 2013-06-15

### Changed

- Depend on `levelup` and `leveldown` instead of `level` ([**@thlorenz**](https://github.com/thlorenz))

### Added

- Add support for using `memdown` via `{ mem: true }` ([**@thlorenz**](https://github.com/thlorenz))

## [1.2.2] - 2013-06-12

### Fixed

- Fix example in README ([**@mcollina**](https://github.com/mcollina))

## [1.2.1] - 2013-05-31

### Fixed

- Fix shadowed `opts` variable ([**@dominictarr**](https://github.com/dominictarr))

## [1.2.0] - 2013-05-31

### Changed

- Optionally don't clean up the database ([**@dominictarr**](https://github.com/dominictarr))

## [1.1.1] - 2013-05-28

### Removed

- Remove node 0.6 from Travis ([**@dominictarr**](https://github.com/dominictarr))

### Fixed

- Fix problems with `os.tmpdir()` on node 0.8 ([**@dominictarr**](https://github.com/dominictarr))

## [1.1.0] - 2013-05-28

### Added

- Add default name for database ([**@dominictarr**](https://github.com/dominictarr))

## [1.0.1] - 2013-05-28

### Changed

- Update `description` in `package.json` ([**@dominictarr**](https://github.com/dominictarr))

### Removed

- Remove `tap` dependency ([**@dominictarr**](https://github.com/dominictarr))

## 1.0.0 - 2013-05-28

:seedling: Initial release.

[unreleased]: https://github.com/level/level-test/compare/v6.0.0...HEAD

[6.0.0]: https://github.com/level/level-test/compare/v5.0.0...v6.0.0

[5.0.0]: https://github.com/level/level-test/compare/v4.0.0...v5.0.0

[4.0.0]: https://github.com/level/level-test/compare/v3.0.0...v4.0.0

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
