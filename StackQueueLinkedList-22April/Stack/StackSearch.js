//In this exercise, we will see how to search a stack for a value. We will implement this as a method of the node based stack, as this is the easiest way to implement a search. The process of searching a stack is similar to the iteration of a stack. We will iterate from the top of the stack, checking for the value we need. If it is found, we return its index as Element found at index number: [Index], otherwise, we return -1("Element not found").
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

  search(val) {
    var index = -1;
    var found = false;
    var holder = this.top;

    while (!found && holder != null) {
      if (holder.value === val) {
        found = true;
      }
      holder = holder.next;
      index++;
    }
    if (!found) {
      return "Element not found";
    } else {
      return "Element found at index number: " + index;
    }
  }
}

var s = new Stack();
s.push(1);
s.push(2);
s.push(3);
console.log(s.search(2));
console.log(s.search(5));
