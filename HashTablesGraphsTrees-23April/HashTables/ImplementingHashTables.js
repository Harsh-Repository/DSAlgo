class HashTable {
  constructor(size) {
    //The constructor takes in a size with which you perform the modulus operation for each value.
    //This should be a prime number and a large prime number would be even better.
    //These are the requirements for the hash table that will be set by the user.

    this.size = size;
    this.values = {};

    //We are going to calculate a modulus from the value and the size.
    //Use this modulus and find the index to insert the value in the array.
  }

  calculateHash(value) {
    return value % this.size;
  }

  add(value) {
    var hash = this.calculateHash(value);

    if (this.values[hash] === undefined) {
      this.values[hash] = value;
    } else {
      var iters = 0;
      while (this.values[hash] !== undefined && iters <= this.size) {
        hash += 1;
        hash = hash % this.size;
        iters += 1;
      }
      if (iters > this.size) {
        throw "IndexOutOfRange";
      } else {
        this.values[hash] = value;
      }
    }
  }

  contains(value) {
    var hash = this.calculateHash(value);

    if (this.values[hash] == value) {
      return true;
    } else {
      var iters = 0;
      while (this.values[hash] != value && iters <= this.size) {
        hash += 1;
        hash = hash % this.size;
        iters += 1;
      }
      if (this.values[hash] == value) {
        return true;
      } else {
        return false;
      }
    }
  }

  print() {
    console.log(this.values);
  }
}

var h = new HashTable(53);
h.add(4);
h.add(8);
h.add(12);

console.log(h.contains(8));
console.log(h.contains(15));
h.print();
