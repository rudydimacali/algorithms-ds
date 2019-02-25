const preOrder = (tree) => {
  const treeElements = [];
  const traverse = (node) => {
    treeElements.push(node.val);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  };
  traverse(tree.root);
  return treeElements;
};
