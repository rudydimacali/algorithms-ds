/*

Doubly Linked List:
Example:   
               ->     ->     ->     ->
            1      2      3      4      5
               <-     <-     <-     <-
           HEAD                        TAIL

Time Complexity:
* Insertion: O(1)
* Removal: O(1)
* Searching: O(n) // Technically O(n/2)
* Access: O(n)

*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    const removedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      removedNode.prev.next = null;
      this.tail = removedNode.prev;
      removedNode.prev = null;
    }
    this.length -= 1;
    return removedNode;
  }

  shift() {
    if (this.length === 0) return undefined;
    const removedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      removedNode.next.prev = null;
      this.head = removedNode.next;
      removedNode.next = null;
    }
    this.length -= 1;
    return removedNode;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
    }
    this.head = newNode;
    this.length += 1;
    return this;
  }

  get(index) {
    if (index < 0 || index > this.length - 1) return null;
    let currentNode = this.head;
    if (index > Math.floor((this.length - 1) / 2)) {
      currentNode = this.tail;
      for (let i = this.length - 1; i > index; i -= 1) {
        currentNode = currentNode.prev;
      }
    } else {
      for (let i = 0; i < index; i += 1) {
        currentNode = currentNode.next;
      }
    }
    return currentNode;
  }

  set(index, val) {
    const node = this.get(index);
    if (!!node) node.val = val;
    return !!node;
  }

  insert(index, val) {
    if (index < 0 || index > this.length - 1) return null;
    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);
    const newNode = new Node(val);
    const prevNode = this.get(index - 1);
    newNode.next = prevNode.next;
    newNode.prev = prevNode;
    prevNode.next.prev = newNode;
    prevNode.next = newNode;
    this.length += 1;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length - 1) return null;
    if (index === 0) return this.unshift();
    if (index === this.length - 1) return this.pop();
    const removedNode = this.get(index);
    removedNode.next.prev = removedNode.prev;
    removedNode.prev.next = removedNode.next;
    removedNode.next = null;
    removedNode.prev = null;
    return removedNode;
  }
}
