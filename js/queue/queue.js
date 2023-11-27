//enqueue
//dequeue
//front/peak
//isEmpty
//print

class Queue {
  constructor() {
    this.items = {};
    this.frontIndex = 0;
    this.endIndex = 0;
  }

  isEmpty() {
    return this.frontIndex === this.endIndex;
  }

  enqueue(item) {
    this.items[this.endIndex] = item;
    this.endIndex++;
  }

  dequeue() {
    if (this.frontIndex === this.endIndex) {
      return null;
    }

    let item = this.items[this.frontIndex];
    delete this.items[this.frontIndex];
    this.frontIndex++;
    return item;
  }

  front() {
    if (this.frontIndex === this.endIndex) {
      return null;
    }

    return this.items[this.frontIndex];
  }

  print() {
    if (this.frontIndex === this.endIndex) {
      return null;
    }

    let queue = "";
    for (let i = this.frontIndex; i < this.endIndex; i++) {
      queue += this.items[i] + "";
    }
    console.log(queue);
  }
}

let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.print();
q.dequeue();
q.print();
