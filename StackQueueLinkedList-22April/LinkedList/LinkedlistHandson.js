//In this exercise, we will see how to insert to the rear of a singly linked list. This process will involve iterating to the end of the list to update the final element. There are two special cases that we will typically handle for inserting to the rear.
//They are as follows:
// If there is nothing in the list yet, we insert to the front by default
// If there is only one value in the list, we simply update the front’s next value to the value being inserted.
// The result of the code is as shown below.
class Node {
  constructor(val, next) {
    this.value = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.front = new Node(null, null);
    this.size = 0;
  }

  insertFront(val) {
    var nodeIn = new Node(val, this.front);
    this.front = nodeIn;
    this.size++;
  }

  print() {
    var holder = this.front;
    while (holder != null) {
      console.log(holder.value);
      holder = holder.next;
    }
  }
  insert(val, index) {
    if (index > this.size) {
      throw "IndexOutOfRange";
    } else {
      if (index == 0) {
        this.insertFront(val);
      } else {
        var i = 0;
        var holder = this.front;
        while (i < index - 1) {
          holder = holder.next;
          i++;
        }
        var newNode = new Node(val, holder.next);
        holder.next = newNode;
        this.size++;
      }
    }
  }
  deleteFront() {
    this.front = this.front.next;
    this.size--;
  }

  delete(index) {
    if (index > this.size) {
      throw "IndexOutOfRange";
    } else {
      if (index == 0) {
        this.deleteFront();
      } else {
        var i = 0;
        var holder = this.front;
        while (i < index - 1) {
          holder = holder.next;
          i++;
        }
        holder.next = holder.next.next;
        this.size--;
      }
    }
  }
  isEmpty() {
    return this.size == 0;
  }

  insertRear(val) {
    if (this.size == 0) {
      this.insertFront(val);
    } else if (this.size == 1) {
      this.front.next = new Node(val, null);
      this.size++;
    } else {
      var holder = this.front;
      while (holder.next != null) {
        holder = holder.next;
      }
      holder.next = new Node(val, null);
      this.size++;
    }
  }
}

var list = new LinkedList();

list.insertRear(1);
list.insertRear(2);
list.insertRear(3);
list.print();
