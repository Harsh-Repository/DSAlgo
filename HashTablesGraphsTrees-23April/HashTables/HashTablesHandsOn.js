// In this exercise, we will see we can union together two lists of values.
//A union is when we combine all of the elements from two lists, such that we have a list that contains a single instance of all elements in both lists.
//For example for the lists [1,2,4] and [1,3,5], the union is [1,2,3,4,5].
//To complete a union, we need to ensure no duplicate values are added to the resulting list.
//This can be done using a hash table, which can verify no element that already exists gets added again. The code below demonstrates this.

const map1 = new Map();

var union = [];
const arr1 = [1, 3, 5, 7, 9];
const arr2 = [1, 2, 4, 6, 8, 10];

for (var i = 0; i < arr1.length; i++) {
  if (!map1.has(arr1[i])) {
    map1.set(arr1[i], arr1[i]);
    union.push(arr1[i]);
  }
}

for (var i = 0; i < arr2.length; i++) {
  if (!map1.has(arr2[i])) {
    map1.set(arr2[i], arr2[i]);
    union.push(arr2[i]);
  }
}

console.log(map1);
