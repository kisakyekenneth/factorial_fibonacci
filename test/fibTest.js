const assert = require('chai').assert;
const fibonacci = require('../fibonacci');

describe('Getting Fibonacci Sequence of a number', () => {
    it('should return a fibonacci sequence', () => {
        var result = fibonacciSequence(10);
        var fiboSequence = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ];
        assert.equal(result.toString(), fiboSequence.toString())
    });
});