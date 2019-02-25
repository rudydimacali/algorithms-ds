const breadthFirstSearch = (tree) => {
  const queue = [tree.root];
  const treeElements = [];
  while (queue.length) {
    treeElements.push(queue[0].val);
    if (queue[0].left !== null) {
      queue.push(queue[0].left);
    }
    if (queue[0].right !== null) {
      queue.push(queue[0].right);
    }
    queue.shift();
  }
  return treeElements;
};
