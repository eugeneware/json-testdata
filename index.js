module.exports = require('./testdata');
module.exports.leveldata = module.exports.map(function (data, i) {
  return {
    type: 'put',
    key: i,
    value: data
  };
});
