var pull     = require('pull-stream')
var cat  = require('pull-cat')

var tape     = require('tape')
var uniquecombine   = require('../')

tape('only let values that are hit X times', function (t) {

  pull(
    cat([
      pull.values([2,3,4]),
      pull.values([3,4,5])
    ]),
    uniquecombine(2),
    pull.collect(function (err, array) {

      t.equal(array.length, 2)
      t.equal(array[0], 3)
      t.equal(array[1], 4)
      t.end()
      
      // [3,4]
    })
  )

})

tape('no filter but still unique', function (t) {

  pull(
    cat([
      pull.values([2,3,4]),
      pull.values([3,4,5])
    ]),
    uniquecombine(0),
    pull.collect(function (err, array) {

      t.equal(array.length, 4)
      t.equal(array[0], 2)
      t.equal(array[1], 3)
      t.equal(array[2], 4)
      t.equal(array[3], 5)
      t.end()
      
      // [2,3,4,5]
    })
  )

})