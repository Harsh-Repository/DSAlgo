//Value indicates the value of the node. It is the current value of the node (newly created node).
//Next points to the node that follows the current node.
//In the node, the top value points to the next value inside the stack.
//Thus, a pointer relationship exists throughout the stack object.
//This is tracked by the next value.
//The top node keeps track of the value next to it, that node keeps track of the next value, and so on.
//This tracking goes through the chain until the end of the stack list.

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}
//None of them (value, next) are currently set for the top value because there is nothing in the stack.
//There is no value and nothing to point to.
//It is just an empty node sitting on top of the stack.

class Stack {
  constructor() {
    this.top = new Node(null, null);
    this.size = 0;
    //The size property is used because there is no length property to rely on anymore.
    //You need to use the size property to check the size of the stack every single time.
  }

  push(val) {
    var inNode = new Node(val, this.top);
    this.top = inNode;
    this.size++;
    //You have now created a chain.
    // The top is the new node, and it points to what was previously the top.
  }

  peek() {
    //It is very important that you return the value property of the top.
    // Remember, the top is a node, and you want to retrieve the actual value that is on top of the stack.
    // You want the top value property. You don't want to return the node objects.
    // The idea here is that no one should be aware of the implementation of the stack.
    //The stack has a consistent set of operations.
    // When you push a value onto the stack, you provide it with a value that gets onto the stack.
    // When you peek for a value, it gives the value that is on top of the stack.
    // Users should be able to work without knowing about the underlying components.
    if (this.size > 0) {
      return this.top.value;
    } else {
      throw "Stack Underflow!";
    }
  }

  pop() {
    if (this.size > 0) {
      //You are specifying here that the top of the stack is now the value that is after the current top.
      //Note that it would effectively remove the top of the stack.
      //The top is now pointing somewhere else.
      //It is pointing to the value that follows the top rather than the actual top of the stack.
      var retVal = this.top.value;
      this.top = this.top.next;
      this.size--;
    } else {
      throw "Stack Underflow!";
    }
  }

  isEmpty() {
    return this.size == 0;
  }

  print() {
    //The holder is essentially a placeholder.
    //When running and iterating through the stack, you need to iterate through every single node.
    //So, you need something to overwrite every single time.
    //And the holder does it for you.
    var holder = this.top;
    while (holder.next != null) {
      console.log(holder.value);
      holder = holder.next;
    }
  }
}

var s = new Stack();
console.log("-----------");
s.push(1);
s.push(2);
s.print();
console.log("-----------");
s.push(3);
s.push(4);
s.print();
console.log("-----------");
s.pop();
s.pop();
s.print();
console.log("-----------");
