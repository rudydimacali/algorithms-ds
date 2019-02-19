/*
Quick sort recursively puts each element into it's correct position
in the array, then does the same for each element on the left and right
of the correctly positioned element.

Time Complexity: O(n log n)
Space Complexity: O(log n)

*/

const assert = require('assert');

const quickSort = (arr) => {
  const swap = (array, index1, index2) => {
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
  };
  const pivot = (array, start = 0, end = array.length - 1) => {
    let pivotIndex = start;
    const pivotElement = array[pivotIndex];
    for (let i = start + 1; i < end; i += 1) {
      if (array[i] < pivotElement) {
        pivotIndex += 1;
        swap(array, i, pivotIndex);
      }
    }
    swap(array, pivotIndex, start);
    return pivotIndex;
  };
  const recursiveSort = (array, left = 0, right = arr.length - 1) => {
    if (left < right) {
      const pivotIndex = pivot(array, left, right);
      recursiveSort(array, left, pivotIndex - 1);
      recursiveSort(array, pivotIndex + 1, right);
    }
  };
  recursiveSort(arr);
  return arr;
};

assert.deepEqual(quickSort([3, 4, 2, 1, 5]), [1, 2, 3, 4, 5]);
