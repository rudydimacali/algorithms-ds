const assert = require('assert');

/* Implement a function which accepts an array and number of elements to count.
Find the largest sum of n elements.

 I: Array of nums, n
 O: Largest Sum
 C: O(n) Time Complexity, O(1) Space Complexity
 E: N/A
 */

const largestSum = (arr, n) => {
  if (n > arr.length) return null;
  let tempSum = 0;
  for (let i = 0; i < n; i += 1) {
    tempSum += arr[i];
  }
  let maxSum = tempSum;
  for (let i = n; i < arr.length; i += 1) {
    tempSum -= arr[i - n];
    tempSum += arr[i];
    if (tempSum > maxSum) maxSum = tempSum;
  }
  return maxSum;
};

assert.equal(largestSum([12, 10, 11, 1, 2, 3], 3), 33);
assert.equal(largestSum([1, 1, 3, 3, 3, 4, 4, 5], 1), 5);
assert.equal(largestSum([], 2), null);
assert.equal(largestSum([1, 5, 15, 12, 3, 2], 4), 35);
