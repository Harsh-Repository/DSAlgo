//In this exercise, you will convert the existing graph class we have into a directed graph.
//To do this, we need to adjust the way that we add edges to the graph.
//In a directed graph, edges are only added in a single direction, so we must remove the symmetrical edge addition.
//This can be simply done by changing the addEdge method as shown below.
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

  print() {
    console.log(this.adjList);
  }
}

var g = new Graph();
g.addEdge(1, 2);
g.addEdge(2, 3);
g.addEdge(3, 4);
console.log(g.getEdges(1));
