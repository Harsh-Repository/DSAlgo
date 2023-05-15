let person = {
  name: "John Doe",
  age: 54,
  address: {
    city: "Bengaluru",
    state: "Karnataka",
  },
  isMarried: true,
  languages: ["English", "Hindi", "Kannada"],
  displayDetails: function () {
    return (
      this.name +
      " lives in " +
      this.address.city +
      " and is " +
      this.age +
      " years old!"
    );
  },
  displayData: function (item) {
    if (this.hasOwnProperty(item)) {
      return this[item];
    } else {
      return null;
    }
  },
  updateData: function (item, newValue) {
    if (this.hasOwnProperty(item)) {
      this.item = newValue;
      return true;
    } else {
      return false;
    }
  },
  deleteData: function (item) {
    if (this.hasOwnProperty(item)) {
      delete this.item;
      return true;
    } else {
      return false;
    }
  },
};

if (person.updateData("page", 70) == true) {
  console.log("Age updated! New age: " + person.displayAge());
} else {
  console.log("No such property exists. Something went wrong!");
}

if (person.deleteData("address") == true) {
  console.log("Address deleted!");
} else {
  console.log("No such property exists. Something went wrong!");
}

console.log(person.displayDetails());
console.log(person.displayData("languages"));
