class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  insert(value) {
    let node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.size++;
  }

  remove() {
    let current = this.top;
    this.top = this.top.next;
    this.size--;
    return current.value;
  }

  peek() {
    return this.top.value;
  }

  print() {
    let current = this.top;
    let output = "";
    while (current) {
      output += current.value + ", ";
      current = current.next;
    }
    console.log(output);
  }
}

let myStack = new Stack();

myStack.insert(10);
myStack.insert(20);
myStack.insert(30);
myStack.insert(40);
myStack.insert(50);
console.log("-----------------");
myStack.print();
console.log("-----------------");
console.log(myStack.remove() + " removed from Stack!");
console.log(myStack.remove() + " removed from Stack!");
console.log("-----------------");
myStack.print();
console.log("-----------------");
console.log(myStack.peek() + " this is the top item in array!");
