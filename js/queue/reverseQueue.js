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
    let input = this.inputStack.getStackString();
    let output = this.outputStack.getStackString();
    output = output.split("").reverse().join("").trim();
    console.log(output, input);
  }
}

let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.print();
q.dequeue();
q.print();
