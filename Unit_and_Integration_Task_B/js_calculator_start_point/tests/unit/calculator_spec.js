var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('can add', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.equal(calculator.runningTotal, 5)
  })

  it('can subtract', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(calculator.runningTotal, 3)
  })

  it('can multiply', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.equal(calculator.runningTotal, 15)
  })

  it('can divide', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(calculator.runningTotal, 3)
  })

  it('can concatenate clicks', function(){
    calculator.numberClick(2);
    calculator.numberClick(5);
    assert.equal(calculator.runningTotal, 25)
  })

  it('can chain multiple operations', function(){
    calculator.numberClick(2);
    calculator.numberClick(5);
    calculator.operatorClick('+');
    calculator.numberClick(5);
    calculator.operatorClick('-');
    calculator.numberClick(1);
    calculator.numberClick(0);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 20)
  })

  it('can clear running total without clearing the calculation', function(){
    calculator.numberClick(8);
    calculator.operatorClick('+');
    calculator.numberClick(8);
    calculator.operatorClick('-');
    calculator.numberClick(7);
    calculator.clearClick();
    calculator.numberClick(9);
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 7)
  })

});
