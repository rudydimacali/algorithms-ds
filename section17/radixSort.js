/*
Radix sort categorizes each number by each
digit at each tens place in order to sort.

Time Complexity: O(nj)
Space Complexity: O(n + j)
WHERE j = number of digits (average)

*/

const assert = require('assert');

const radixSort = (arr) => {
  const getDigit = ((num, place) => Math.floor(num / (10 ** place)) % 10);
  const getDigits = ((num) => {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1
  });
  let maxDigits = 0;
  for (let i = 0; i < arr.length; i += 1) {
    maxDigits = Math.max(maxDigits, getDigits(arr[i]));
  }
  for (let j = 0; j < maxDigits; j += 1) {
    const buckets = Array.from({ length: 10 }, () => []);
    for (let k = 0; k < arr.length; k += 1) {
      buckets[getDigit(arr[k], j)].push(arr[k]);
    }
    arr = [].concat(...buckets);
  }
  return arr;
};

assert.deepEqual(radixSort([123, 4, 12, 9281, 57123, 221, 24, 1, 0, 123]),
  [0, 1, 4, 12, 24, 123, 123, 221, 9281, 57123]);
