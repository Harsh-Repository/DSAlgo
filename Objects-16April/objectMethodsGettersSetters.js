// It is important that the getter method's name is different from the property name.
// If their names are the same, then JavaScript will not recognize the referenced target and will break due to recursion.

// To refer to the productName
// This type of reference uses the prod() property, instead of using a syntax
// method's logic to get the value.
// with .prodName, you can use .prod.

const product = {
  productName: "Computer",

  get prod() {
    return this.productName;
  },

  set prod(prod) {
    if (prod != "") {
      this.productName = prod;
    }
  },
};
console.log(product.prod);
// Declare methods as actual functions.
// Set various properties and set getters and setters for them.
// Getters get the data and setters set the data.
//------------------------
//------------------------
// const user = {
//     username: "username",
//     password: "password",
//     firstname: "firstName",
//     lastname: "lastName"
// }

//First, let's add a getter and setter for the username property.

const user = {
  username: "username",

  get name() {
    return this.username;
  },

  set name(nameIn) {
    this.username = nameIn;
  },

  password: "password",
  firstname: "firstName",
  lastname: "lastName",

  printUser: function () {
    console.log(
      this.username +
        "," +
        this.password +
        "," +
        this.firstname +
        "," +
        this.lastname
    );
  },
};

user.printUser();
