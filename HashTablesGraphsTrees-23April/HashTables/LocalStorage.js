class HashTable {
  constructor(size) {
    this.size = size;
    this.values = {};
  }

  calculateHash(value) {
    //Every single value has a character, and each character can be translated into a numeric value based on ASCII.
    //using ASCII, you can assign a specific number to every single variable and character.
    //For instance, 65 is assigned for A, 66 is assigned for B, and so on.
    //Translate the text into numeric values and add them together.
    //The total value that you get represents the text.
    //It's the sum of all the character values in the string.
    //Take that sum and perform the modulus operation and then modulus logic applies.
    var sum = 0;
    for (var i = 0; i < value.size; i++) {
      var charCode = value.charCodeAt(i);
      sum += charCode;
    }
    return sum % this.size;
  }

  add(key, value) {
    //Assume that every single value that you get is a unique key-value pair.
    //It means that all subs coming out of this logic are unique.
    // This assumption may not necessarily be correct for the modulus operation.
    //However, this creates a more simplified version of the code and also enables linear probing.
    var hash = this.calculateHash(key);

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

  getItem(key) {
    //Note that you can simply add values & retrieve them based on this key.
    var hash = this.calculateHash(key);
    return this.values[hash];
  }

  print() {
    console.log(this.values);
  }
}

var h = new HashTable(53);
h.add("Hello", "World!");
h.print();
