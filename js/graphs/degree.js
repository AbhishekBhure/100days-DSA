class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addEdgeHelper(node, adj, weight) {
    if (this.adjList.has(node)) {
      var currSet = this.adjList.get(node);
      currSet.add({ adj, weight });
      this.adjList.set(node, currSet);
    } else {
      this.adjList.set(node, new Set([{ adj, weight }]));
    }
  }

  addEdge(node, adj, weight) {
    this.addEdgeHelper(node, adj, weight);
    if (adj != node) {
      this.addEdgeHelper(adj, node, weight);
    }
  }

  getEdges(node) {
    return this.adjList.get(node);
  }

  getAllNodes() {
    return Array.from(this.adjList.keys());
  }

  print() {
    console.log(this.adjList);
  }
}

function degree(g) {
  var nodes = g.getAllNodes();
  let degrees = new Map();

  for (let i = 0; i < nodes.length; i++) {
    var adj = g.adjList.get(nodes[i]);

    for (const [key, value] of adj.entries()) {
      if (degrees.has(key.adj)) {
        degrees.set(key.adj, degrees.get(key.adj) + 1);
      } else {
        degrees.set(key.adj, 1);
      }
    }
  }
  console.log(degrees);
}

let g = new Graph();
g.addEdge(0, 1, 13);
g.addEdge(0, 2, 14);
g.addEdge(0, 3, 30);
g.addEdge(3, 4, 12);

degree(g);
