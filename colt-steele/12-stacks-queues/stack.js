class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }

  print() {
    if (this.length === 0) return undefined;
    let current = this.first;
    const arr = [];
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
  }
}

const stack = new Stack();

console.log('PUSH=================');
stack.print();
stack.push(0);
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.print();

console.log('POP==================');
stack.print();
console.log(stack.pop());
console.log(stack.pop());
stack.print();
