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
  pop() {
    if (!this.head) return undefined;
    const poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  shift() {
    if (this.length === 0) return undefined;
    const oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count, current;
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode != null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    const newNode = new Node(val);
    const beforeNode = this.get(index - 1);
    const afterNode = beforeNode.next;

    (beforeNode.next = newNode), (newNode.prev = beforeNode);
    (newNode.next = afterNode), (afterNode.prev = newNode);
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const removedNode = this.get(index);

    const beforeNode = removedNode.prev;
    const afterNode = removedNode.next;

    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;

    removedNode.next = null;
    removedNode.prev = null;

    this.length--;
    return removedNode;
  }

  reverse() {
    // My own implementation of reverse
    if (this.length < 2) return this;
    const oldHead = this.head;
    const oldTail = this.tail;

    this.tail = oldHead;
    this.head = oldTail;

    let current = this.head;

    for (let i = this.length - 1; i >= 0; i--) {
      let prev = current.prev;
      let next = current.next;

      current.next = prev;
      current.prev = next;
      current = current.next;
    }
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
console.log('PUSH==================');
list.push(0);
list.push(1);
list.push(2);
list.print();

console.log('POP=================');

console.log(list.pop());
list.print();
list.push(5);
list.push(6);
list.push(7);

console.log('Shift=================');
list.print();
list.shift();
list.print();

console.log('Unshift=================');
list.print();
list.unshift(100);
list.print();

console.log('Get=================');
list.print();
console.log(list.get(2));

console.log('Set=================');
list.print();
list.set(2, 565);
list.print();

console.log('Insert=================');
list.print();
list.insert(3, 'Inserted at index: ' + 3);
list.print();

console.log('Remove=================');
list.print();
console.log(list.remove(3));
list.print();
console.log(list.remove(0));
list.print();
console.log(list.remove(3));
list.print();

console.log('Reverse=================');
list.print();
console.log(list.reverse());
list.print();
