/*

Binary Heap Time Complexity:

Insertion: O(log n)
Removal: O(log n)
Search: O(n)

*/

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  swap(indexOne, indexTwo) {
    const temp = this.values[indexOne];
    this.values[indexOne] = this.values[indexTwo];
    this.values[indexTwo] = temp;
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];
    while (element > this.values[Math.floor((index - 1) / 2)] && index !== 0) {
      this.swap(index, Math.floor((index - 1) / 2));
      index = Math.floor((index - 1) / 2);
    }
    return this;
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp();
    return this;
  }

  sinkDown() {
    let index = 0;
    const element = this.values[0];
    let leftChild = this.values[(index * 2) + 1];
    let rightChild = this.values[(index * 2) + 2];
    while (element < leftChild || element < rightChild) {
      if (rightChild === undefined || rightChild > leftChild) {
        this.swap(index, (index * 2) + 2);
        index = (index * 2) + 2;
      } else {
        this.swap(index, (index * 2) + 1);
        index = (index * 2) + 1;
      }
      leftChild = this.values[(index * 2) + 1];
      rightChild = this.values[(index * 2) + 2];
    }

  }

  extractMax() {
    this.swap(0, this.values.length - 1);
    const removed = this.values.pop();
    this.sinkDown();
    return removed;
  }
}
