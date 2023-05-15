// keep track of latest book issues by a student. Solve this using stack where each issue contains dollowing data points:
// 1. ID no 2. name of book 3. issue date

//print the stack to display 4 latest books

class Stack {
  constructor() {
    this.items = [];
  }

  insert(value) {
    this.items.push(value);
  }

  isEmpty() {
    if (this.items.length == 0) {
      return true;
    } else {
      return false;
    }
  }

  remove() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
    } else {
      return this.items.pop();
    }
  }

  peek() {
    console.log(this.items[this.items.length - 1]);
  }

  print() {
    console.log("Stack contains : ");
    if (this.isEmpty()) {
      console.log("Stack is empty");
    } else {
      for (let index = 0; index < this.items.length; index++) {
        console.log(this.items[index]);
      }
    }
  }
}

let books = new Stack();
books.insert({ id: 100, name: "John", date: new Date() });
books.insert({ id: 101, name: "John", date: new Date() });
books.insert({ id: 102, name: "John", date: new Date() });
books.insert({ id: 103, name: "John", date: new Date() });
books.print();
