# react-example
[![Build Status](https://travis-ci.org/Keats/react-example.svg?branch=master)](https://travis-ci.org/Keats/react-example)
[![Dependency Status](https://david-dm.org/Keats/react-example.svg)](https://david-dm.org/Keats/react-example)

Basic example using react, redux and react-router.

TODOS:
- try flow

## Known issues
Karma doesn't refresh some cached files and thus run some stale tests: in my case modifying tests in tests/components/addForm_tests.js for example only use the initial file to be served.
There is an issue on that: https://github.com/karma-runner/karma/issues/1087


Immutablejs map keys are string and coerced to strings so something like myMap.set(1, {}) and myMap.get("1") are different and the .get might return undefined if you do myMap.get(1).
