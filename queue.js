class Node {
  constructor(groupSize, next = null) {
    this.groupSize = groupSize;
    this.next = next;
  }
}

class Queue {
  constructor(limit = 5) {
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
    } else {
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

const prompt = require("prompt-sync")({ sigint: true });

const ride = new Queue();

console.log(`waiting time = ${ride.qTime / 60} minutes`);

let groupSize = prompt(
  "What is the number of people in the group? - enter 0 to stop -"
);

while (groupSize !== "0") {
  if (groupSize <= 12) {
    ride.enqueue(groupSize);
  } else {
    while (!(groupSize < 12)) {
      ride.enqueue(12);
      groupSize -= 12;
    }
    ride.enqueue(groupSize);
  }
  groupSize = prompt(
    "What is the number of people in the group? - enter 0 to stop -"
  );
}

console.log(`${ride.qTime / 30} persons are in the line....`);
console.log(`waiting time = ${ride.qTime / 60} minutes`);

console.log(`${ride.dequeue()} persons went into the ride....`);

console.log(`waiting time = ${ride.qTime / 60} minutes`);
