const prompt = require("prompt-sync")({ sigint: true });

class Node {
  constructor(year, highlight, next = null) {
    this.year = year;
    this.highlight = highlight;
    this.next = next;
  }
}

class LinkedList {
  constructor(year, highlight) {
    this.head = new Node(year, highlight);
  }

  insertBeginning = (year, highlight) => {
    const newNode = new Node(year, highlight, this.head);
    this.head = newNode;
  };

  traverse = () => {
    let current = this.head;
    while (current) {
      console.log(`Year: ${current.year}, highlight: ${current.highlight}`);
      current = current.next;
    }
  };

  insertHighlights = (age) => {
    let current = this.head;
    while (current.year < age) {
      let currentAge = current.year + 1;
      if (current.next && current.next.year === currentAge) {
        current = current.next;
      } else {
        let highlight = prompt(`What was the highlight for age ${currentAge}?`);
        let newNode = new Node(currentAge, highlight, current.next);
        current.next = newNode;
        current = newNode;
      }
    }
  };
}

const myLife = new LinkedList(7, "I entered School");
myLife.insertBeginning(3, "I talked fluently");
myLife.insertBeginning(1, "I was born");

myLife.traverse();

const age = prompt("How old are you?");
myLife.insertHighlights(age);
myLife.traverse();
