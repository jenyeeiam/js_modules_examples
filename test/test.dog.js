var assert = require('assert');

var dog = require('../src/dog.js')

describe('Dog class', function() {
  it('should do something', function() {
    console.log(dog)
    assert.equal("Hello".length, 5);
  })
})
