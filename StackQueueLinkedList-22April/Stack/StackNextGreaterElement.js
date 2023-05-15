//In this exercise, we will see how to solve the next greater element problem. The next greater element for an element x is the first element larger than it on the right side. If no greater element exists, -1 is returned instead.

// The process for solving this problem is not too complex. We start by adding the first element of the array onto the stack. We then iterate looking for a larger value. If we find it, we add it to the stack, and output it as the next greatest element.
class Stack {
  constructor() {
    this.stack = [];
  }

  push(val) {
    this.stack.push(val);
  }

  pop() {
    if (this.stack.length > 0) {
      return this.stack.pop();
    } else {
      throw "Stack Underflow";
    }
  }

  peek() {
    if (this.stack.length > 0) {
      return this.stack[this.stack.length - 1];
    } else {
      throw "Stack Underflow";
    }
  }

  isEmpty() {
    return this.stack.length == 0;
  }

  size() {
    return this.stack.length;
  }

  print() {
    console.log(this.stack);
  }
}

function printNextGreatest(arr, n) {
  var s = new Stack();

  s.push(arr[0]);

  for (var i = 1; i < n; i++) {
    if (s.length == 0) {
      s.push(arr[i]);
    } else {
      while (!s.isEmpty() && s.peek() < arr[i]) {
        console.log(s.pop() + "-->" + arr[i]);
      }
      s.push(arr[i]);
    }
  }
  while (!s.isEmpty()) {
    console.log(s.pop() + "-->" + -1);
  }
}

var arr = [11, 13, 21, 3];
var n = arr.length;
printNextGreatest(arr, n);
