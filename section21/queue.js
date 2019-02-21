/*

Queues follow a FIFO format.

Time Complexity:
* Insertion: O(1)
* Removal: O(1)

*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (this.first === null) {
      this.first = newNode;
    } else {
      this.last.next = newNode;
    }
    this.last = newNode;
    return this;
  }

  dequeue() {
    const removedNode = this.first;
    this.first = removedNode.next;
    removedNode.next = null;
    return removedNode;
  }
}
