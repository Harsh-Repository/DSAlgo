// Solutions to two problems that are related to each other:
// 1. Finding duplicates in a list.
// 2. Finding the interception between two lists.

// These are common problems used in different applications.
// Removing the Duplicates:
// 1. Applied in SQL to create distinct queries.
// 2. It is also used in data analysis to remove duplicate data points.
// Intercept Calculation:
// 1. An operation that exists in set theory.
// 2. Applied in anything related to set theory, which includes SQL databases.

//Understanding the Problem
// Removing the Duplicates:
// Input: A list of values.
// Output: A new list of values with no duplicates.
// Intercept Calculation:
// Input: Two lists of values.
// Output: The intercept of two lists, i.e., all the similar values.

class HashTable {
  constructor(size) {
    this.size = size;
    this.values = {};
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

// If all the hashes are unique and you don't have to do any linear probing, you can check if something is contained in the hash table in constant time.
// It will only take one operation for you to check: Compute the hash and find the value.
// Comparatively, if you search for a value in an array, you must search the values one by one. Every single time you may have to search through the whole array. That would take a lot longer than just using the hash table.

var arr = [1, 2, 3, 3, 4, 4, 5];
var h = new HashTable(251);
var retArr = [];

for (var i = 0; i < arr.length; i++) {
  var v = arr[i];

  if (!h.contains(v)) {
    retArr.push(v);
    h.add(v);
  }
}

console.log(retArr);

//The main strategy here is to iterate through the first array and put all the values into the hash table.
// Iterate through the second array and check if the values in the second array are in the hash table.
// The main strategy here is to iterate through the first array and put all the values into the hash table.
// Iterate through the second array and check if the values in the second array are in the hash table.
//This method mimics the idea of duplicates, except instead of checking values in your own array, you are populating it with another array and checking for duplicates.
//That means to identify the same values between the two and make them an intercept.

//If you search through all the second array values and the first array values, remember, you need to iterate through the values one by one until you find the intercepts.

//Using the hash table, you can go straight to the location of the value. It makes it faster to work, assuming that you don't have to do any linear probing.

var arr1 = [1, 2, 3, 3, 4, 4, 5];
var arr2 = [1, 6, 2, 7, 9];

var h = new HashTable(251);
var intercept = [];

for (var i = 0; i < arr1.length; i++) {
  var v = arr1[i];
  if (!h.contains(v)) {
    h.add(v);
  }
}

for (var i = 0; i < arr2.length; i++) {
  var v = arr2[i];
  if (h.contains(v)) {
    intercept.push(v);
  }
}

console.log(intercept);
