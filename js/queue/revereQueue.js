const Stack = require("../stacks/stack");
class Queue {
  constructor() {
    this.inputStack = new Stack();
    this.outputStack = new Stack();
  }

  enqueue(val) {
    this.inputStack.push(val);
  }

  dequeue() {
    if (this.outputStack.isEmpty()) {
      while (!this.inputStack.isEmpty()) {
        this.outputStack.push(this.inputStack.pop());
      }
    }
    if (this.outputStack.isEmpty()) {
      return null;
    }
    this.outputStack.pop();
  }

  isEmpty() {
    return this.inputStack.isEmpty() && this.outputStack.isEmpty();
  }

  print() {
    this.inputStack.getStackString();
    this.outputStack.getStackString();
  }
}

let q = new Queue();
q.enqueue(1);
q.dequeue(2);
q.enqueue(3);
console.log(q);
