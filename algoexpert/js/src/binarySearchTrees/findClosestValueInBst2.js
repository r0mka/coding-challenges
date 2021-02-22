// Average: O(log(n)) time | O(1) space
// Worst: O(n) time | O(1) space

function findClosestValueInBst(tree, target) {
  // build the tree
  const bst = buildTree(
    tree.nodes,
    tree.nodes.find((el) => el.id === tree.root)
  );

  return findClosestValueInBstHelper(bst, target, bst.value);
}

function findClosestValueInBstHelper(tree, target, closest) {
  let currentNode = tree;

  while (currentNode !== null) {
    if (
      Math.abs(target - closest) >
      Math.abs(target - currentNode.value)
    ) {
      closest = currentNode.value;
    }
    if (target < currentNode.value) {
      currentNode = currentNode.left;
    } else if (target > currentNode.value) {
      currentNode = currentNode.right;
    } else {
      break;
    }
  }
  return closest;
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
