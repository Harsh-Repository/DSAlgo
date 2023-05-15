//In this exercise, we will see how to check if a doubly linked list is a palindrome.
//This algorithm will improve on the stack based algorithm we saw in the stack section.
//Our algorithm will use a two pointer approach. One pointer will start at the rear of the list and the other will start at the front of the list.
//On each iteration, we compare the front and rear pointers to determine if they are the same.
//Once the pointers meet in the middle, we have iterated the whole list.
//If at any point, the values do not equal, the list is not a palindrome. If they always equal, the list must be a palindrome.

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

  isPalindrome() {
    var frontHolder = this.front;
    var rearHolder = this.rear;
    var left = 0;
    var right = this.size - 1;
    var valid = true;
    while (valid && left < right) {
      if (frontHolder.value !== rearHolder.value) {
        valid = false;
      }
      left++;
      right--;
      frontHolder = frontHolder.next;
      rearHolder = rearHolder.prev;
    }
    return valid;
  }
}

var list = new LinkedList();
list.insertFront(1);
list.insertFront(2);
list.insertFront(3);
list.insertFront(3);
list.insertFront(2);
list.insertFront(1);
console.log(list.isPalindrome());
list.insertFront(1);
console.log(list.isPalindrome());
