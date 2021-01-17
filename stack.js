class Node {
  constructor(color, number, next = nulll) {
    this.color = color;
    this.number = number;
    this.next = next;
  }

  // getData = () => `${this.number} - ${this.color}`;
}

class Stack {
  constructor(limit = 20) {
    this.top = null;
    this.length = 0;
    this.limit = limit;
  }

  isFull = () => this.length === this.limit;

  isEmpty = () => this.length === 0;

  peek = () => (this.isEmpty() ? "it is Empty" : this.top); // this.top.getData();
  // "No cards left in the deck"

  push = (color, number) => {
    if (this.isFull()) {
      console.log("it is Full");
      // "The deck is full!"
    } else {
      const newNode = new Node(color, number, this.top);
      this.top = newNode;
      this.length++;
    }
  };

  pop = () => {
    if (this.isEmpty()) {
      console.log("The deck is empty!");
    } else {
      const popped = this.top;
      this.top = popped.next;
      this.length--;
      return popped; // .getData()
    }
  };
}

const deck = new Stack();

// const colors = ["red", "blue", "green", "yellow"];
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const random = (array) => {
//   const randomIndex = Mathfloor(Math.random() * array.length);
//   return array[randomIndex];
// };

randomNumber = () => Math.floor(Math.random() * 9 + 1);

randomColor = () => {
  let c = Math.floor(Math.random() * 4);
  if (c === 0) return "red";
  else if (c === 1) return "blue";
  else if (c === 2) return "green";
  else return "yellow";
};

let x = 0;
while (x < 20) {
  deck.push(randomColor(), randomNumber());
  x++;
}

// while (!deck.isFull()) {
//   let color = random(colors);
//   let number = random(numbers);
//   deck.push(color, number);
// }

// let playerCards = 5;
// let player1Cards = [];
// let player2Cards = [];
// for (let i = 0; i < 5; i++) {
//   player1Cards.push(deck.pop());
//   player2Cards.push(deck.pop());
// }

distribute = (player) => {
  console.log(`Player ${player}:`);
  let n = 1;
  while (n < 6) {
    let card = deck.pop();
    console.log(`${n}. ${card.color}-${card.number}`);
    n++;
  }
};

distribute(1);
distribute(2);

console.log(`First card in deck: ${deck.peek().color}-${deck.peek().number}`);

// console.table(player1Cards);
// console.table(player2Cards);
// console.log(deck.peek());
// console.log("--------------");
// deck.traverse();
