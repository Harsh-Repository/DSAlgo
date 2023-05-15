//There are two different ways to respresent a graph:
//1. Adjacency Matrix -- It is bit complex
//2. Adjacency List -- Most commonly used and the same is demonstrated below.

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
    // if (adj != node) {
    //   this.addEdgeHelper(adj, node, weight);
    // }
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

var g = new Graph();
g.addEdge(0, 1, 0);
g.addEdge(0, 2, 0);
g.addEdge(1, 2, 0);

g.print();
