class GraphNode {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }
}

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(ele, weight) {
    let graphNode = new GraphNode(ele, weight);
    let conatains = false;
    let i = 0;

    while (i < this.items.length && !conatains) {
      if (this.items[i].weight > graphNode.weight) {
        this.items.splice(i, 0, graphNode);
        conatains = true;
      }
      i++;
    }

    if (!conatains) {
      this.items.push(graphNode);
    }
  }

  dequeue() {
    if (this.items.length === 0) {
      throw "Stack UnderFlow";
    } else {
      return this.items.shift();
    }
  }
  isEmpty() {
    return this.size == 0;
  }

  print() {
    console.log(this.items);
  }
}

module.exports = PriorityQueue;

// let pq = new PriorityQueue();
// pq.enqueue(1, 10);
// pq.enqueue(2, 5);
// pq.enqueue(3, 0);
// pq.enqueue(4, 20);
// pq.print();
