class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  print() {
    let current = this.head;
    const arr = [];
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
  printReverse() {
    let current = this.tail;
    const arr = [];
    while (current) {
      arr.push(current.val);
      current = current.prev;
    }
    console.log(arr);
  }
}

const list = new DoublyLinkedList();
list.push(0);
list.push(1);
list.push(2);
list.print();
list.print();
