/*

Stacks follow a LIFO format.

Time Complexity:
* Insertion: O(1)
* Removal: O(1)

*/

class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
  }
}

class Stack {
  constructor() {
    this.last = null;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.last !== null) {
      newNode.prev = this.last;
    }
    this.last = newNode;
    return this;
  }

  pop() {
    const removedNode = this.last;
    this.last = removedNode.prev;
    return removedNode;
  }
}

const findMaxDiff = (nums) => {
  let highestItem = nums[0];
  let highestDiff = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > highestItem) {
      highestItem = nums[i - 1];
    }
    if (nums[i] - highestItem > highestDiff) {
      highestDiff = nums[i] - highestItem;
    }
  }
  return highestDiff;
};

findMaxDiff(1)
