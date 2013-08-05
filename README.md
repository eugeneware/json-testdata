# json-testdata

A range of different test JSON test data sources for use in database testing.

## Installation

Install via npm:

```
$ npm install json-testdata
```

## Usage

## Just an array of JSON data

Just require the module to get a big array of JSON test data sources from npm:

``` js
var db = levelup('mydb', { valueEncoding: 'json' });
var testData = require('json-testdata');
var batch = testData.map(function (data, i) {
  return {
    type: 'put',
    key: i,
    value: data
  };
});
db.batch(batch);
```

## An array of levelup data:

Do the above stuff for you:

``` js
var db = levelup('mydb', { valueEncoding: 'json' });
var batch = require('json-testdata').leveldata;
db.batch(batch);
```
