const assert = require('chai').assert;
const factorial = require('../factorial');

describe('factorial', function(){
    
    describe('Handle valid input', () => {
        it('Getting factorial of 5', function(){
      
            assert.equal(factorial(5),120);
        });
    
        it('Getting Factorial of 8', function(){
            assert.equal(factorial(8), 40320)
        })
    })

    describe('Handle invalid input', () => {
        it('should return factorial of -5', function(){
      
            assert.equal(factorial(-5),1);
        });
    
        it('should return undefined for factorial of undefined', function(){
            assert.equal(factorial('string'), 'undefined')
        })
    })

})