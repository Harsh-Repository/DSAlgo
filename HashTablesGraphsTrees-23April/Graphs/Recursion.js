//Recusrsion is when a function references to itself.
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

  isEmpty() {
    return this.items.length == 0;
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

function dijkstra(g, source) {
  let distances = {};
  let prev = {};
  let pq = new PriorityQueue();
  //The source will get initialized to zero.
  //It is going to initialize distance to inifity except the source, this is because to check each of those different nodes to see what is adjacent to our current node and which one is the cheapest one to take.
  //Then we continually do that until we get all the key middle of distances as the idea of what this is going to do.

  distances[source] = 0;
  pq.enqueue(source, 0);

  var allNodes = g.getAllNodes();

  for (var i = 0; i < allNodes.length; i++) {
    if (allNodes[i] != source) {
      distances[allNodes[i]] = Infinity;
    }
    prev[allNodes[i]] = null;
    //The reason why we are keeping track of previous is because when we move through our graph we are gonna keep track of where we have been previously and that gonna make it so that we don't end up going around in a circle over again because in some graphs we are able to start at a node and then move around and end up back at the node.
  }

  while (!pq.isEmpty()) {
    let minNode = pq.dequeue();
    let currNode = minNode.name;

    let adjList = g.getEdges(minNode.name);

    for (const [key, value] of adjList.entries()) {
      let alt = distances[currNode] + value.weight;
      //To add weight to travel to next edge.

      if (alt < distances[key.adj]) {
        distances[key.adj] = alt;
        prev[key.adj] = currNode;

        pq.enqueue(key.adj, distances[key.adj]);
      }
    }
  }

  console.log(distances);
}

function sumToRec(n) {
  if (n == 1) {
    return 1;
  } else {
    return n + sumToRec(n - 1);
  }
}

console.log(sumToRec(4));
