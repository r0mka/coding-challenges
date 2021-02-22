/*   
          10 
      /       \
     5         15
    / \        /    \
   2   5     13       22
  /          / \     
 1         12   14  
                   
*/

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  // recursively
  //   insert(value) {
  //     if (value < this.value) {
  //       if (this.left === null) {
  //         this.left = new BST(value);
  //       } else {
  //         this.left.insert(value);
  //       }
  //     } else {
  //       if (this.right === null) {
  //         this.right = new BST(value);
  //       } else {
  //         this.right.insert(value);
  //       }
  //     }
  //     return this;
  //   }

  // iteratevely
  insert(value) {
    let currentNode = this;
    while (true) {
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = new BST(value);
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = new BST(value);
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
    return this;
  }
  // recursively
  contains(value) {
    if (value < this.value) {
      if (this.left === null) {
        return false;
      } else {
        return this.left.contains(value);
      }
    } else if (value > this.value) {
      if (this.right === null) {
        return false;
      } else {
        return this.right.contains(value);
      }
    } else return true;
  }

  remove(value) {
    let current = this;
    let prev;
    while (true) {
      if (value === current.value) {
      }
    }
    return this;
  }
}

module.exports = BST;
