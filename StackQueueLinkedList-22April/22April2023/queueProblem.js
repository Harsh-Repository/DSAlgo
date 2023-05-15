// keep track of reservations made for an event in an hotel & store the bookings as they confirm in and only after first 3 bookings confirmed.
// display the confirmed bookings at the end. Add a total of 5 bookings.

//hint: store 5, display confirmed

// each booking consists of following: 1. name of person 2. no. of people 3. booking date

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(value) {
    this.items.push(value);
  }

  isEmpty() {
    if (this.items.length == 0) {
      return true;
    } else {
      return false;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      return this.items.shift();
    }
  }

  print() {
    console.log("Queue contains : ");
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      //print only first 3 bookings
      for (let index = 0; index < 3; index++) {
        console.log(this.items[index]);
      }
    }
  }
}

let bookings = new Queue();
bookings.enqueue({ name: "John", numOfPpl: 2, date: new Date() });
bookings.enqueue({ name: "Jane", numOfPpl: 3, date: new Date() });
bookings.enqueue({ name: "Julie", numOfPpl: 1, date: new Date() });
bookings.enqueue({ name: "June", numOfPpl: 2, date: new Date() });
bookings.enqueue({ name: "Jan", numOfPpl: 1, date: new Date() });
bookings.print();
