class Node {
  constructor(groupSize, next = null) {
    this.groupSize = groupSize;
    this.next = next;
  }
}

class Queue {
  constructor(limit = 10) {
    this.front = null;
    this.back = null;
    this.length = 0;
    this.limit = limit;
    this.qTime = 0;
  }

  isFull = () => this.length === this.limit;

  isEmpty = () => this.length === 0;

  peek = () => (this.isEmpty() ? `Queue Underflow` : this.front.groupSize);

  enqueue = (groupSize) => {
    if (this.isFull()) {
      console.log("Queue Overflow");
    } else if (groupSize <= 12) {
      const newNode = new Node(groupSize);
      if (this.isEmpty()) {
        this.front = newNode;
        this.back = newNode;
      } else {
        this.back.next = newNode;
        this.back = newNode;
      }
      this.length++;
      this.qTime += groupSize * 30;
    } else {
      const newNode1 = new Node(12);
      const newNode2 = new Node(groupSize - 12);
      if (this.isEmpty()) {
        this.front = newNode1;
        this.back = newNode2;
      } else {
        this.back.next = newNode1;
        newNode1.next = newNode2;
        this.back = newNode2;
      }
      this.length += 2;
      this.qTime += 12 * 30 + (groupSize - 12) * 30;
    }
  };

  dequeue = () => {
    if (this.isEmpty()) {
      console.log("Queue Underflow");
    } else {
      const removed = this.front;
      if (this.length === 1) {
        this.front = null;
        this.back = null;
      } else {
        this.front = removed.next;
      }
      this.length--;
      this.qTime -= removed.groupSize * 30;
      return removed.groupSize;
    }
  };
}

const ride = new Queue();

ride.enqueue(4);
console.log(`waiting time = ${ride.qTime / 60} minutes`);

ride.enqueue(8);
ride.enqueue(12);
ride.enqueue(16);
ride.enqueue(20);

console.log(`${ride.qTime / 30} person are in the queue....`);
console.log(`waiting time = ${ride.qTime / 60} minutes`);

console.log(`${ride.dequeue()} person went into the ride....`);

console.log(`waiting time = ${ride.qTime / 60} minutes`);
