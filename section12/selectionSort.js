/*
Selection sort iterates through the passed in array and
continuously compares pairs to move each item to the
front of the array until it is at its correct position.

Time Complexity: O(n^2)
Space Complexity: O(1)

*/

const assert = require('assert');

const selectionSort = (arr) => {
  const swap = (index1, index2) => {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  };
  let needToSwap = false;
  let minIndex = null;
  for (let i = 0; i < arr.length; i += 1) {
    minIndex = i;
    for (let j = i; j < arr.length; j += 1) {
      if (arr[j] < arr[minIndex]) {
        needToSwap = true;
        minIndex = j;
      }
    }
    if (needToSwap) {
      swap(i, minIndex);
    } else {
      return arr;
    }
  }
  return arr;
};

assert.deepEqual(selectionSort([3, 4, 2, 1, 5]), [1, 2, 3, 4, 5]);
