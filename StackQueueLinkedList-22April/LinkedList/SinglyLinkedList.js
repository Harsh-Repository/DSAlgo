//How to implement a singly linked list?
// It has a link that moves from the front to the rear.
// This enables you to iterate from the front end and mimic the queue/stack while inserting or deleting at any point.

class Node {
  constructor(value, next) {
    this.value = value;
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
    while (holder.next != null) {
      console.log(holder.value);
      holder = holder.next;
    }
  }

  insert(val, index) {
    //from here, you need to move to the point of insertion and insert the value.
    if (index > this.size) {
      throw "IndexOutOfRange";
    } else {
      if (index == 0) {
        this.insertFront(val);
      } else {
        var i = 0;
        var holder = this.front;

        //Including minus one here as you are working in a zero indexed manner.
        //You need to move the index forward by one.
        while (i < index - 1) {
          holder = holder.next;
          i++;
          //The code given here moves forward by one until it reaches the index where you want to insert the value.
          //On reaching the required index, you need to place the value between the previous node and the node that comes next to the index.
        }

        var newNode = new Node(val, holder.next);
        holder.next = newNode;
        this.size++;
        //Remember, all that you are doing here is iterating to the point where you want to insert and inserting the value between the two nodes that are currently there.
        //You sandwich the value between two nodes.
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
}

var l = new LinkedList();
l.insertFront(1);
l.insertFront(2);
l.insert(3, 1);
//l.deleteFront();
l.delete(1);
l.print();
