//Implementing a Queue with Two Stacks
//When you think about implementing a queue with two stacks, you need to think about reversing the order of a stack.
//If you take the values of a stack and push them onto another stack, the second stack will have the values in reverse order of the first stack.
//If the first stack contains values in reverse order, the second stack will have them in the normal order.
//You are taking everything from the first stack and pushing it onto the second stack.
//When you place the values onto the first stack, the values are effectively placed at the rear.
//When you push the values back onto the first stack, it gives you the enqueue.
//Once enqueued, all the values are inserted to the rear rather than the front.
//From here dequeuing is simple. You just need to pop off the stack.
class Stack {
  constructor() {
    this.stack = [];
  }

  push(val) {
    this.stack.push(val);
  }

  pop() {
    return this.stack.pop();
  }
  print() {
    console.log(this.stack);
  }
}

class Queue {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }

  enqueue(val) {
    while (!this.s1.isEmpty()) {
      this.s2.push(this.s1.pop());
    }
    this.s1.push(val);

    while (!this.s2.isEmpty()) {
      this.s1.push(this.s2.pop());
    }
    //At this point, values are placed on the first stack and everything else in the second stack.
    //Note that the values are at the bottom of the stack rather than the top.
    //By the time you push everything back from the second stack, values are inserted into the end of the queue that exists.
    //And they will be stored in the same order as in the beginning.
  }

  dequeue() {
    return this.s1.pop();
  }
}
