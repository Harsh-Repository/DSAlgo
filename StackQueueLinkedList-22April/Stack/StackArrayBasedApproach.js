class Stack {
  constructor() {
    this.stack = [];
  }

  isEmpty() {
    return this.stack.length == 0;
  }

  size() {
    return this.stack.length;
  }

  push(val) {
    this.stack.push(val);
  }

  pop() {
    if (this.stack.length > 0) {
      return this.stack.pop();
    } else {
      return console.log("Stack Underflow");
    }
  }

  peek() {
    if (this.stack.length > 0) {
      return this.stack[this.stack.length - 1];
    } else {
      return console.log("Stack Underflow");
    }
  }

  print() {
    console.log(this.stack);
  }
}

var s = new Stack();
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.print();
s.pop();
s.print();
s.pop();
s.print();
s.pop();
s.print();
s.pop();
s.print();
s.pop();
s.print();
