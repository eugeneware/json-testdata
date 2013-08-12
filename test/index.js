var expect = require('chai').expect,
    through = require('through'),
    testData = require('..');

describe('json-testdata', function() {
  it('should be able to get all the json data', function(done) {
    expect(testData.data.length).to.equal(780);
    expect(testData.data[53].name).to.equal('browserify');
    expect(testData.data[53].author.name).to.equal('James Halliday');
    done();
  });

  it('should be able to get the levelup test data', function(done) {
    expect(testData.leveldata.length).to.equal(780);
    expect(testData.leveldata[53].key).to.equal(53);
    expect(testData.leveldata[53].value.name).to.equal('browserify');
    expect(testData.leveldata[53].value.author.name).to.equal('James Halliday');
    done();
  });

  it('should be able to get a read stream', function(done) {
    var count = 0;
    testData.readStream()
      .pipe(through(
        function (data) {
          if (count === 53) {
            expect(data.name).to.equal('browserify');
            expect(data.author.name).to.equal('James Halliday');
          }
          count++;
        },
        function () {
          expect(count).to.equal(780);
          done();
        }
      ));
  });
});
