pull-unique-combine
===================

![Build status](https://api.travis-ci.org/binocarlos/pull-unique-combine.png)

Like pull-stream's unique through stream but requires a result to be present in all streams

## example

```js
var pull  = require('pull-stream')
var cat  = require('pull-cat')
var uniquecombine = require('pull-unique-combine')

pull(
  cat([
		pull.values([2,3,4]),
		pull.values([3,4,5])
	]),
  uniquecombine(2),
  pull.collect(function (err, array) {
    console.log(array)

    // [3,4]
  })
)

```

## license