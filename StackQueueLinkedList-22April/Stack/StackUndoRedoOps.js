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

var undoStack = new Stack();
var redoStack = new Stack();
var counter = 0;
//The incrementCounter() function increments the counter by one and displays it on the screen.
// To undo the increment, you need to keep track of the state that was before the increment operation.
// You need to keep track of the counter (value) before the increment so that you can push that value onto the undoStack.
function incrementCounter() {
  //When you perform an undo operation, you pop off the counter from the undoStack.
  //So, the top counter in the undoStack was the most recent counter before incrementing it. That allows to undo the operation.
  undoStack.push(counter);
  counter++;
  document.getElementById("val").value = counter; //this allows us to do simple increment of the counter.
}

function undo() {
  redoStack.push(counter);
  counter = undoStack.pop();
  document.getElementById("val").value = counter;
}

function redo() {
  undoStack.push(counter);
  counter = redoStack.pop();
  document.getElementById("val").value = counter;
}
