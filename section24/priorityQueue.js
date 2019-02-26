/*

Priority Queue Time Complexity:

Insertion: O(log n)
Removal: O(log n)
Search: O(n)

*/

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
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
    const priority = this.values[index].priority;
    while (index !== 0 && priority < this.values[Math.floor((index - 1) / 2)].priority) {
      this.swap(index, Math.floor((index - 1) / 2));
      index = Math.floor((index - 1) / 2);
    }
    return this;
  }

  enqueue(val, priority) {
    this.values.push(new Node(val, priority));
    this.bubbleUp();
    return this;
  }

  sinkDown() {
    let index = 0;
    const element = this.values[0];
    let leftChild = this.values[(index * 2) + 1];
    let rightChild = this.values[(index * 2) + 2];
    while ((leftChild !== undefined && element.priority > leftChild.priority) ||
      (rightChild !== undefined && element.priority > rightChild.priority)) {
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

  dequeue() {
    this.swap(0, this.values.length - 1);
    const removed = this.values.pop();
    this.sinkDown();
    return removed;
  }
}
