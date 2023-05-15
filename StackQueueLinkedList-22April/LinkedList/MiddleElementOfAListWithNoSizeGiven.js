//How to print the middle element of a list when the size is not given?
//There are two ways to find the middle of the list when you don't know the size.

// The first one is:
//      1. Iterate all the elements until you reach the end to get the size of the list.
//      2. Divide the size by two to get the middle of the list.

// The second method is:
//      1. Create two pointers that start at the same point, i.e., from the front of the list.
//      2. Move the first pointer by two every single time.
//      3. Move the second pointer forward by one space every single time.
// The faster pointer which moves forward by two spaces, finishes twice as quickly as the slower one.
// By the time the faster pointer finishes, the slower one will be at exactly the middle of the list. This allows you to find the center of the list using just one pass through the list rather than iterating through it multiple times.

class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class LinkedList {
  constructor() {
    this.front = new Node(null, null, null);
    this.rear = new Node(null, null, null);
    this.size = 0;
  }

  insertFront(val) {
    var nodeIn = new Node(val, null, null);

    if (this.size == 0) {
      this.front = this.rear = nodeIn;
    } else {
      nodeIn.next = this.front;
      this.front.prev = nodeIn;

      this.front = nodeIn;
    }

    this.size++;
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

        var newNode = new Node(val, holder.next, holder);

        if (holder.next != null) {
          holder.next.prev = newNode;
        }

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

        holder.next.next.prev = holder;
        holder.next = holder.next.next;
        this.size--;
      }
    }
  }

  print() {
    var holder = this.front;
    while (holder != null) {
      console.log(holder.value);
      holder = holder.next;
    }
  }

  printReverse() {
    var holder = this.rear;

    while (holder != null) {
      console.log(holder.value);
      holder = holder.prev;
    }
  }

  reverseList() {
    var temp;
    var holder = this.front;

    while (holder != null) {
      temp = holder.prev;
      holder.prev = holder.next;
      holder.next = temp;
      holder = holder.prev;
    }
    if (temp != null) {
      this.front = temp.prev;
    }
  }

  printMiddle() {
    var slow = this.front;
    var fast = this.front;
    while (fast != null && fast.next != null) {
      fast = fast.next.next;
      slow = slow.next;
    }
    console.log(slow.value);
  }
}

var l = new LinkedList();
l.insertFront(1);
l.insertFront(2);
l.insertFront(3);
l.insert(4, 1);
l.insert(5, 0);

l.printMiddle();
