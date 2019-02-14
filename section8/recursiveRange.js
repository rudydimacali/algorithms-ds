const assert = require('assert');

/* Write a function that takes a number and returns the
sum of all numbers from 0 to the provided number.

 I: Number
 O: Sum of 0 through Number
 C: N/A
 E: N/A
 */

const recursiveRange = (n) => {
  if (n === 1) return 1;
  return n + recursiveRange(n - 1);
};

assert.equal(recursiveRange(6), 21);
assert.equal(recursiveRange(10), 55);
