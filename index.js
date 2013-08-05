var Stream = require('stream');
module.exports = require('./testdata');
module.exports.leveldata = module.exports.map(function (data, i) {
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

  var data = module.exports.slice();
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
