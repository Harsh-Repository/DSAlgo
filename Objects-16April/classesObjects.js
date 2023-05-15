// A constructor is a part of the code that is run when creating a new product.
// If somebody declares a variable of the type product, whatever is inside the constructor runs first.
// The constructor should initialize all the properties that are required in the new object.

class Product {
  constructor() {
    this.productName = "";
    this.price = 0;
  }
  printProduct() {
    console.log(this.productName + " : " + this.price);
  }
}

var prod = new Product();
var prod2 = new Product();

prod.productName = "Test";
prod.price = 199.99;

prod2.productName = "Computer";
prod2.price = 599.99;

prod.printProduct();
prod2.printProduct();

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

  printProduct() {
    console.log(
      this.username +
        " " +
        this.password +
        " " +
        this.firstName +
        " " +
        this.lastName
    );
  }
}

var user = new User();
user.username = "username";
user.password = "password";
user.firstName = "firstName";
user.lastName = "lastName";

user.printProduct();
