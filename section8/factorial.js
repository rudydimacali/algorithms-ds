const assert = require('assert');

/* Write a function that takes a number and returns the factorial of that number.

 I: Num
 O: Factorial
 C: N/A
 E: N/A
 */

const factorial = (num) => {
  if (num === 0) return 1;
  return num * factorial(num - 1);
};

assert.equal(factorial(0), 1);
assert.equal(factorial(1), 1);
assert.equal(factorial(2), 2);
assert.equal(factorial(4), 24);
assert.equal(factorial(7), 5040);
