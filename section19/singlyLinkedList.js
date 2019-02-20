/*

Singly Linked List:
Example:    1 -> 2 -> 3 -> 4 -> 5
           HEAD               TAIL
Time Complexity:
* Insertion: O(1)
* Removal: O(1) - Head or Tail
           O(n) - Index
* Searching: O(n)
* Access: O(n)

*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
};

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (this.head === null) return undefined;
    const returnNode = this.tail;
    this.length -= 1;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return returnNode;
    }
    let current = this.head.next;
    let newTail = this.head;
    while (current.next) {
      newTail = newTail.next;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    return returnNode;
  }

  shift() {
    if (this.head === null) return undefined;
    const returnNode = this.head;
    this.length -= 1;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return returnNode;
    }
    this.head = this.head.next;
    return returnNode;
  }

  unshift(val) {
    const newHead = new Node(val);
    newHead.next = this.head;
    if (this.head === this.tail) {
      this.tail = newHead;
    }
    this.head = newHead;
    return newHead;
  }

  get(num) {
    if (num >= this.length || num < 0) return undefined;
    let returnNode = this.head;
    for (let i = 0; i < num; i += 1) {
      returnNode = returnNode.next;
    }
    return returnNode;
  }

  set(num, val) {
    const returnNode = this.get(num);
    if (!returnNode) return false;
    returnNode.val = val;
    return true;
  }

  insert(num, val) {
    if (num > this.length || num < 0) return false;
    if (num === this.length) return !!this.push(val);
    if (num === 0) return !!this.unshift(val);
    const newNode = new Node(val);
    const previousNode = this.get(num - 1);
    newNode.next = previousNode.next;
    previousNode.next = newNode;
    return true;
  }

  remove(num) {
    if (num >= this.length || num < 0) return undefined;
    if (num === this.length - 1) return this.pop();
    if (num === 0) return this.unshift();
    const previousNode = this.get(num - 1);
    const removedNode = previousNode.next;
    previousNode.next = removedNode.next;
    return removedNode;
  }

  reverse() {
    let node = this.head;
    let prev = null;
    let next;
    this.head = this.tail;
    this.tail = node;
    for (let i = 0; i < this.length; i += 1) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}
