/*
Insertion sort iterates through the passed in array and
for each item, compares it to everything to the left of
itself and finds where it must be inserted in order.

Time Complexity: O(n^2)
Space Complexity: O(1)

*/

const assert = require('assert');

const insertionSort = (arr) => {
  const swap = (index1, index2) => {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  };
  for (let i = 1; i < arr.length; i += 1) {
    for (let j = i - 1; j >= 0; j -= 1) {
      if (arr[j] > arr[j + 1]) {
        swap(j, j + 1);
      }
    }
  }
  return arr;
};

assert.deepEqual(insertionSort([3, 4, 2, 1, 5]), [1, 2, 3, 4, 5]);
