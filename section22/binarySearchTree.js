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
      // eslint-disable-next-line no-else-return
    } else {
      let node = this.root;
      // eslint-disable-next-line no-constant-condition
      while (true) {
        if (val === node.val) return undefined;
        if (val < node.val && node.left === null) {
          node.left = newNode;
          return this;
        }
        if (val < node.val) {
          node = node.left;
        }
        if (val > node.val && node.right === null) {
          node.right = newNode;
          return this;
        }
        if (val > node.val) {
          node = node.right;
        }
      };
    }
  }
}
