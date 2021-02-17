// Average: O(log(n)) time | O(log(n)) space
// Worst: O(n) time | O(n) space

function findClosestValueInBst(tree, target) {
  // build the tree
  const bst = buildTree(
    tree.nodes,
    tree.nodes.find((el) => el.id === tree.root)
  );

  return findClosestValueInBstHelper(bst, target, bst.value);
}

function findClosestValueInBstHelper(tree, target, closest) {
  if (tree === null) return closest;
  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value;
  }

  if (target < tree.value) {
    return findClosestValueInBstHelper(tree.left, target, closest);
  } else if (target > tree.value) {
    return findClosestValueInBstHelper(tree.right, target, closest);
  } else return closest;
}

function buildTree(nodes, el) {
  const node = new BST(el.value);
  if (el.right) {
    node.right = buildTree(
      nodes,
      nodes.find((item) => item.id === el.right)
    );
  }
  if (el.left) {
    node.left = buildTree(
      nodes,
      nodes.find((item) => item.id === el.left)
    );
  }
  return node;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

module.exports = findClosestValueInBst;
