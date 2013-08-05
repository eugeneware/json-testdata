var expect = require('chai').expect,
    testData = require('..');

describe('json-testdata', function() {
  it('should be able to get all the json data', function(done) {
    expect(testData.length).to.equal(780);
    expect(testData[53].name).to.equal('browserify');
    expect(testData[53].author.name).to.equal('James Halliday');
    done();
  });

  it('should be able to get the levelup test data', function(done) {
    expect(testData.leveldata.length).to.equal(780);
    expect(testData.leveldata[53].key).to.equal(53);
    expect(testData.leveldata[53].value.name).to.equal('browserify');
    expect(testData.leveldata[53].value.author.name).to.equal('James Halliday');
    done();
  });
});
