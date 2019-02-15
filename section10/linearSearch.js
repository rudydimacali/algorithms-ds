/*
Linear Search accepts an array and a value, and iterates through the array.
If the value is found, return the value's index.
If it is not found, return -1.

I: Array, value
O: Index of Value or -1
C: N/A
E: N/A
Time: O(n) Space: O(0)
*/

const assert = require('assert');

const linearSearch = (array, value) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return i;
  }
  return -1;
};

assert.equal(linearSearch([10, 15, 20, 25, 30], 15), 1);
assert.equal(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1], 4), 5);
assert.equal(linearSearch([10, 15, 20, 25, 30], 1), -1);
assert.equal(linearSearch([100], 100), 0);
