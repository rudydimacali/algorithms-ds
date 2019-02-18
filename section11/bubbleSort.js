/*
Bubble sort iterates through the passed in array and
continuously compares pairs to move each item to the
end of the array until it is at its correct position.

Time Complexity: O(n^2)
Space Complexity: O(1)

*/

const assert = require('assert');

const bubbleSort = (arr) => {
  const swap = (index1, index2) => {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  };
  let needToSwap = false;
  for (let i = arr.length; i > 0; i -= 1) {
    for (let j = 0; j < i; j += 1) {
      if (arr[j] > arr[j + 1]) {
        needToSwap = true;
        swap(j, j + 1);
      }
    }
    if (!needToSwap) return arr;
  }
  return arr;
};

assert.deepEqual(bubbleSort([3, 4, 2, 1, 5]), [1, 2, 3, 4, 5]);
