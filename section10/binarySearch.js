/*
Binary Search accepts an array and a value, and iterates through the array
one section at a time.
If the value is found, return the value's index.
If it is not found, return -1.

I: Array, value
O: Index of Value or -1
C: N/A
E: N/A
Time: O(log n) Space: O(0)
*/

const assert = require('assert');

const binarySearch = (array, value) => {
  const search = (start, end) => {
    const midpoint = Math.floor((start + end) / 2);
    if (array[midpoint] === value) return midpoint;
    if (start === end) return -1;
    if (value > array[midpoint]) return search(midpoint + 1, end);
    if (value < array[midpoint]) return search(start, midpoint - 1);
  };
  return search(0, array.length - 1);
};

assert.equal(binarySearch([10, 15, 20, 25, 30], 15), 1);
assert.equal(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 4), 3);
assert.equal(binarySearch([10, 15, 20, 25, 30], 1), -1);
assert.equal(binarySearch([100], 100), 0);
