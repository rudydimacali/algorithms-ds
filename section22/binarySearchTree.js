/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
/* eslint-disable no-else-return */

/*

Binary Search Trees are trees where each node has
lesser values on it's left, and greater values
on it's right.

IE:

          0
      -1     2
           1   3

Time Complexity:
* Insertion: O(log n)
* Searching: O(log n)

*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let node = this.root;
      while (true) {
        if (val === node.val) return undefined;
        if (val < node.val && node.left === null) {
          node.left = newNode;
          return this;
        } else if (val < node.val) {
          node = node.left;
        } else if (val > node.val && node.right === null) {
          node.right = newNode;
          return this;
        } else if (val > node.val) {
          node = node.right;
        }
      }
    }
  }

  find(val) {
    if (this.root === null) return undefined;
    let currentNode = this.root;
    while (true) {
      if (currentNode.val === val) return true;
      if (val > currentNode.val && currentNode.right !== null) {
        currentNode = currentNode.right;
      } else if (val < currentNode.val && currentNode.left !== null) {
        currentNode = currentNode.left;
      } else {
        return false;
      }
    }
  }
}
