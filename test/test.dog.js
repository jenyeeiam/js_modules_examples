var assert = require('assert');

// var dog = require('../src/dog.js');
import { Doggio } from '../src/dog.js';
const sparky = new Doggio(10, 30, 'Sparky');

describe('Dog class', function() {
  it('current height should be 30', function() {
    assert.equal(sparky.currentHeight, 'This doggio is 10in tall');
  });

  it('says woof', () => {
    const woofs = sparky.woof()
    assert.equal(woofs, 'Sparky says WOOF!')
  });

  it('can update weight', () => {
    const newWeight = 50;
    sparky.updateWeight = newWeight;
    assert.equal(sparky.weight, 50)
  })
})
