class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {}
  dequeue() {}

  print() {
    if (this.size === 0) return null;
    const arr = [];
    let current = this.first;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
  }
}

const queue = new Queue();

console.log('Enqueue===============');
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.print();

console.log('Dequeue================');
queue.dequeue();
queue.dequeue();
queue.print();
