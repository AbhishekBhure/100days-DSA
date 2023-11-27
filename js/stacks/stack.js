class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (this.items.length === 0) {
      return "UnderFlow";
    }
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  top() {
    if (this.items.length === 0) {
      return "UnderFlow";
    }
    return this.items[this.items.length - 1];
  }

  printStack() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + ",";
    }

    console.log(str);
  }

  getStackString() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + ",";
    }
    return str;
  }
}

// let stack = new Stack();

// console.log(stack.isEmpty());
// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.push(40);
// stack.push(50);
// stack.pop();
// stack.printStack();
// console.log(stack.isEmpty());
// console.log(stack.top());

module.exports = Stack;
