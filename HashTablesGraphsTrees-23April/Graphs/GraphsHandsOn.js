//In this exercise, we will see how a breadth first search can be implemented with a graph.
//A breadth first search is a method of iterating a graph, where we explore the nodes in layers.
//We start at a specific node, which we will call S. On each iteration, we look at the adjacent nodes to S, and add them to a queue, we then move to the first adjacent node and explore its adjacencies.
//We repeat this process until we have looked at all of the graph nodes. We will start by implementing a queue to use for our algorithm. We start by creating a node.
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
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

//Next, we create a queue with the ability to enqueue, dequeue, peek, check isEmpty, and print.

class Queue {
  constructor() {
    this.front = new Node(null, null);
    this.rear = new Node(null, null);
    this.size = 0;
  }

  enqueue(val) {
    var inNode = new Node(val, null);
    if (this.size == 0) {
      this.front = this.rear = inNode;
      this.size++;
    } else {
      this.rear.next = inNode;
      this.rear = inNode;
      this.size++;
    }
  }

  dequeue() {
    if (this.size == 0) {
      throw "Stack Underflow";
    } else {
      var val = this.front.value;
      this.front = this.front.next;
      this.size--;
      return val;
    }
  }

  peek() {
    if (this.size == 0) {
      throw "Stack Underflow";
    } else {
      return this.front.value;
    }
  }

  isEmpty() {
    return this.size == 0;
  }

  print() {
    var holder = this.front;
    while (holder != null) {
      console.log(holder.value);
      holder = holder.next;
    }
  }
}

//With a queue, we can now implement our bfs. The code for this is shown below.

function bfs(g, start) {
  var explored = [];
  var q = new Queue();
  explored.push(start);
  q.enqueue(start);

  while (!q.isEmpty()) {
    var v = q.dequeue();
    console.log(v);
    if (v) {
      var adj = Array.from(g.getEdges(v));
      for (var i = 0; i < adj.length; i++) {
        if (!explored.includes(adj[i].adj)) {
          explored.push(adj[i].adj);
          q.enqueue(adj[i].adj);
        }
      }
    }
  }
}

//In this example, we start at 1, and progress to its adjacency 2. We then check the adjancencies of 2, and add them, which would be 3. Finally we do the same with 3 to get to 4. The end result is a fully explored graph.
var g = new Graph();
g.addEdge(1, 2);
g.addEdge(2, 3);
g.addEdge(3, 4);
bfs(g, 1);
