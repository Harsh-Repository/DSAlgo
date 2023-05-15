//In the priority queue, the highest priority value is removed first. Three ways to implement this:
//1. Store data in the normal queue order and then find the value that has the highest priority every time.
//2. Store data in a sorted order.
//3. Store data as a heap.

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

  enqueue(element, weight) {
    var graphNode = new GraphNode(element, weight);
    var contain = false;
    var i = 0;

    while (i < this.items.length && !contain) {
      if (this.items[i].weight > graphNode.weight) {
        this.items.splice(i, 0, graphNode);
        contain = true;
      }
      i++;
    }

    if (!contain) {
      this.items.push(graphNode);
    }
  }

  dequeue() {
    if (this.items.length == 0) {
      throw "StackUnderFlow!";
    } else {
      return this.items.shift();
    }
  }

  print() {
    console.log(this.items);
  }
}

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

var pq = new PriorityQueue();
pq.enqueue(1, 10);
pq.enqueue(2, 5);
pq.enqueue(3, 0);
pq.enqueue(4, 20);
pq.print();
