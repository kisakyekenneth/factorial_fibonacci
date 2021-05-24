const assert = require('chai').assert;
const fibonacci = require('../fibonacci');

describe('Getting Fibonacci Sequence of a number', () => {
    it('should return a fibonacci sequence of 0', () => {
        var result = fibonacci(1);
        var fiboSequence = [0,1];
        assert.equal(result.toString(), fiboSequence.toString())
    });
    
    it('should return a fibonacci sequence of 10', () => {
        var result = fibonacci(10);
        var fiboSequence = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ];
        
        assert.equal(result.toString(), fiboSequence.toString())
    });

    it('should return a fibonacci sequence 20', () => {
        var result = fibonacci(20);
       
        var fiboSequence = [0,    1,    1,   2,   3,    5, 8,   13,   21,  34,  55,   89,
          144,  233,  377, 610, 987, 1597,
         2584, 4181, 6765] 
        assert.equal(result.toString(), fiboSequence.toString())
    });
});