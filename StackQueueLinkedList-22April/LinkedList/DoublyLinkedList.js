class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
    //The previous attribute points to the node that is before the current node in the list.
    //So, you have the values that come before and after the current node.
  }
}

class LinkedList {
  constructor() {
    this.front = new Node(null, null, null);
    this.rear = new Node(null, null, null);
    //The new property called rear keeps track of the list. This will be useful when you start at the end and iterate to the front of the list.
    this.size = 0;
  }

  //To modify the insertFront, remember the condition in queues where the front and rear were pointing to the same point when the size was zero.
  insertFront(val) {
    var nodeIn = new Node(val, null, null);
    if (this.size == 0) {
      this.front = this.rear = nodeIn;
    } else {
      nodeIn.next = this.front;
      this.front.prev = nodeIn;
      this.front = nodeIn;
      //Note: There is a difference between the queue and the doubly linked list, and that you need to set the previous.
      //The new node is getting inserted into the front of the list. This node does not have anything previous to it because there is nothing in front of it. The new node only has a node after it.
      //The next node (after) to the new node will be the current front node.
      //Consider the current front node. This node will be put behind the new node, which means its previous pointer should point to what is currently at the front.
    }
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

        var newNode = new Node(val, holder.next, holder); //The value that comes next to the node is the value after the holder.
        //The new value is inserted between the holder and what follows it. So, the value that is previous to the new value is the holder.

        //What is holder's next value?
        //The new holder may not have a value next to it, in which case next will be equal to null.
        //You may also have a new node as the next value.
        if (holder.next != null) {
          holder.next.prev = newNode;
        }
        //If there is a value after the holder, remember, that you are inserting the new value between the holder and its next value.
        //The value that follows the holder points back to the inserted value.
        //You need to update the previous node's link, set the holder's next link to the new node, and increment the size.
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
        //When updating the delet(index), note that the previous attribute that points to the value you are removing can no longer point to it.
        holder.next.next.prev = holder;
        holder.next = holder.next.next;
        this.size--;
      }
    }
  }

  printReverse() {
    var holder = this.rear;

    while (holder != null) {
      console.log(holder.value);
      holder = holder.prev;
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
l.printReverse();

//Modify the singly linked list to create the doubly linked list:
// — Change the node definition to enable the previous attribute so that the nodes can also point to the previous value in addition to pointing to the next value.
// — Change the constructor definition to include the rear property.
// — Modify the insertFront method to set right the pointers to the previous and next nodes.
// — Modify the insert at specific index method to set right the pointers related to the holder in different cases, such as the next value being null or a new value.
// — Modify the delete at specific index method and update the previous attribute that points to the value you are removing.
//You can print the list in reverse, which is a unique operation implemented with the doubly linked lists.
