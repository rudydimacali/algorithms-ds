const assert = require('assert');

/* Implement a function which accepts a sorted array and counts the unique values in the array.
There can be negative numbers in the array, but it will always be sorted.

 I: Array of nums
 O: Number of unique values
 C: O(n) Time Complexity, O(n) Space Complexity
 E: N/A
 */

const countUniqueValues = (arr) => {
  let leftPointer = 0;
  let rightPointer = 1;
  while (rightPointer <= arr.length) {
    if (arr[leftPointer] === arr[rightPointer]) rightPointer += 1;
    if (arr[leftPointer] !== arr[rightPointer]) {
      leftPointer += 1;
      arr[leftPointer] = arr[rightPointer];
    }
  }
  return leftPointer;
};

assert.equal(countUniqueValues([1, 2, 3, 3, 3, 4, 4, 5]), 5);
assert.equal(countUniqueValues([1, 1, 3, 3, 3, 4, 4, 5]), 4);
assert.equal(countUniqueValues([]), 0);
assert.equal(countUniqueValues([1, 2, 3]), 3);
