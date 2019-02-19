/*
Merge sort breaks down the array into arrays of length 1,
then merges each array recursively in the correct sorted order.

Time Complexity: O(n log n)
Space Complexity: O(n)

*/

const assert = require('assert');

const mergeSort = (arr) => {
  const merge = (arr1, arr2) => {
    const newArr = [];
    let leftPointer = 0;
    let rightPointer = 0;
    while (newArr.length < arr1.length + arr2.length) {
      if (rightPointer >= arr2.length || arr1[leftPointer] < arr2[rightPointer]) {
        newArr.push(arr1[leftPointer]);
        leftPointer += 1;
      } else if (leftPointer >= arr1.length || arr2[rightPointer] < arr1[leftPointer]) {
        newArr.push(arr2[rightPointer]);
        rightPointer += 1;
      }
    }
    return newArr;
  };
  const recursiveSort = (array) => {
    if (array.length === 0) return [];
    if (array.length === 1) return array;
    const mid = Math.floor(array.length / 2);
    return merge(recursiveSort(array.slice(0, mid)), recursiveSort(array.slice(mid)));
  };
  return recursiveSort(arr);
};

assert.deepEqual(mergeSort([3, 4, 2, 1, 5]), [1, 2, 3, 4, 5]);
