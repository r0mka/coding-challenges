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
list.print();
