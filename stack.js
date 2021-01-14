class Node {
  constructor(color, number, next = nulll) {
    this.color = color;
    this.number = number;
    this.next = next;
  }
}

class Stack {
  constructor(limit = 20) {
    this.top = null;
    this.length = 0;
    this.limit = limit;
  }

  isFull = () => this.length === this.limit;

  isEmpty = () => this.length === 0;

  peek = () => (this.isEmpty() ? "it is Empty" : this.top);

  push = (color, number) => {
    if (this.isFull()) {
      console.log("it is Full");
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
      return popped;
    }
  };
}

const deck = new Stack();

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
