var pull  = require('pull-stream')

module.exports = UnqiueCombine;

function UnqiueCombine(count) {
  var counters = {}
  var hit = {}
  return pull.filter(function (data) {
    counters[data] = counters[data] || 0
    counters[data]++

    if(hit[data])
    	return false
    
    return hit[data] = !count || counters[data]==count
  })
}

