const assert = require('assert');

/* Write a function that takes an array of numbers and returns the product of them all.

 I: Array of nums
 O: Total product
 C: N/A
 E: N/A
 */

const productOfArray = (arr) => {
  if (arr.length === 1) return arr[0];
  return arr[0] * productOfArray(arr.slice(1));
};

assert.equal(productOfArray([1, 2, 3]), 6);
assert.equal(productOfArray([1, 2, 3, 10]), 60);
