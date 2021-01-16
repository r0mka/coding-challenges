class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift(val) {
    if (!this.head) return undefined;
    const currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  print() {
    if (!this.head) {
      console.log('The list is empty');
      return;
    }
    let curr = this.head;
    console.log(curr.val);
    while (curr.next) {
      curr = curr.next;
      console.log(curr.val);
    }
  }
}

const list = new SinglyLinkedList();
list.push('HELLO');
list.push('GOODBYE');
list.push('HELLO AGAIN');

console.log('============================\nBefore pop:');
list.print();
list.pop();
list.pop();
list.pop();
console.log('============================\nAfter pop:');
list.print();

list.push('GOODBYE');
list.push('HELLO AGAIN');

console.log('============================\nBefore shift: ');
list.print();

console.log('============================\nAfter shift: ');
console.log(list.shift());
list.print();

console.log('============================\nBefore unshift: ');
list.print();
console.log('============================\nAfter unshift: ');
list.unshift('GOOD BYE');
list.print();

console.log('===========================\nGet: ');

console.log(list.get(1));

console.log('===========================\nBefore Set: ');
list.print();

console.log('===========================\nAfter Set: ');
list.set(1, '!!!');
list.print();
