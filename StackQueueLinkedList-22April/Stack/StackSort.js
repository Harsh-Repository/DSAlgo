//In this exercise, we will see how to sort the values in a stack.
//To achieve this, we are going to start by creating a temporary stack.
//We will then iterate our main stack, popping the top value off.
//We will then iterate the temporary stack, finding the proper location for the value to be placed such that it is in sorted order.
//Once this is completed, we place the value on the temporary stack.
//At the end of the function, we return back the sorted temporary stack.
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = new Node(null, null);
    this.size = 0;
  }

  push(value) {
    var inNode = new Node(value, this.top);
    this.top = inNode;
    this.size++;
  }

  peek() {
    if (this.size > 0) {
      return this.top.value;
    } else {
      throw "Stack Underflow";
    }
  }

  pop() {
    if (this.size > 0) {
      var retVal = this.top.value;
      this.top = this.top.next;
      this.size--;
      return retVal;
    } else {
      throw "Stack Underflow";
    }
  }

  isEmpty() {
    return this.size == 0;
  }

  print() {
    var holder = this.top;
    while (holder.next != null) {
      console.log(holder.value);
      holder = holder.next;
    }
  }
}

function sortStack(s) {
  var tmpStack = new Stack();

  while (!s.isEmpty()) {
    var val = s.pop();
    while (!tmpStack.isEmpty() && tmpStack.peek() > val) {
      s.push(tmpStack.pop());
    }
    tmpStack.push(val);
  }
  return tmpStack;
}

var s = new Stack();
s.push(34);
s.push(3);
s.push(31);
s.push(98);
s.push(92);
s.push(23);

var out = sortStack(s);
out.print();
