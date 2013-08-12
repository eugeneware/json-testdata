var Stream = require('stream');
var testData = module.exports.data = require('./testdata');
module.exports.leveldata = testData.map(function (data, i) {
  return {
    type: 'put',
    key: i,
    value: data
  };
});
module.exports.readStream = function (delay) {
  delay = delay || 0;
  var s = new Stream();
  s.readable = true;

  var data = testData.slice();
  var count = data.length;

  function end() {
    s.emit('end');
  }

  function work() {
    var value = data.shift();
    s.emit('data', value);
    setTimeout(function () {
      if (--count === 0) {
        end();
      } else {
        work();
      }
    }, delay);
  }
  setImmediate(work);

  return s;
};
