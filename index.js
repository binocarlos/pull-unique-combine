var pull  = require('pull-stream')

module.exports = UnqiueCombine;

function UnqiueCombine(count) {
  var counters = {}
  return pull.filter(function (data) {
    counters[data] = counters[data] || 0
    counters[data]++

    return counters[data]==count
  })
}

