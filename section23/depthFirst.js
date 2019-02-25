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

const postOrder = (tree) => {
  const treeElements = [];
  const traverse = (node) => {
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    treeElements.push(node.val);
  };
  traverse(tree.root);
  return treeElements;
};
