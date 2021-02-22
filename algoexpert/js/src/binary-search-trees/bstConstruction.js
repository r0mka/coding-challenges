/*   
          10 
      /       \
     5         15
    / \        / \
   2   5     13   22
  /          / \
 1         12   14
*/

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    const newNode = new BST(value);
    let current = this;
    while (true) {
      if (value >= current.value) {
        if (current.right) {
          current = current.right;
        } else {
          current.right = newNode;
          break;
        }
      } else {
        if (current.left) {
          current = current.left;
        } else {
          current.left = newNode;
          break;
        }
      }
    }
    return this;
  }

  contains(value) {}

  remove(value) {
    return this;
  }
}

module.exports = BST;
