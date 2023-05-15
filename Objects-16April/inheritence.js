// What is Inheritance?
// Each object can inherit from the base class.
// This enables implementation of properties without any repetition of the actual implementation code.
// Inheritance works well for objects that have the same properties or methods.
// Rather than implementing properties and methods multiple times, you can inherit them and implement with less code.

class Transportation {
  constructor() {
    this.typeName = "";
    this.wheels = 0;
    this.maxSpeed = 0;
  }
}

// 'super()' is the constructor that will initialize all the properties inherited from the Transportation objects.
// From here, you can add properties that are unique to car.
// The Transportation class provides shared properties for any Transportation method.
// You can then implement the properties that are unique to your object.

class Car extends Transportation {
  constructor() {
    super();
    this.fuel = 0;
  }
}

var car1 = new Car();
car1.typeName = "Car";
car1.wheels = 4;
car1.maxSpeed = 200;
car1.fuel = 40;

console.log(car1);

//-----------------
//-----------------
//-----------------
//-----------------

class User {
  constructor() {
    this.username = "";
    this.password = "";
    this.firstName = "";
    this.lastName = "";
  }
}

class SuperUser extends User {
  constructor() {
    super();
    this.admin = 1;
  }
}

var user = new SuperUser();
user.username = "admin";

console.log(user.username);
console.log(user.admin);
