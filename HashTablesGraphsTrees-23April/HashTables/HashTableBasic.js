//In this exercise, we will see how hashing can help us count the number of occurrences of a value in a list.The process of doing this is straightforward.
//We iterate the list, adding values into the hash table. If the value does not already exist in the table, it is assigned a value of 1, indicating one instance of it.
//If the value exists in the table, its value is incremented to count the number of occurrences.
// We will use the map object in Javascript, which is a fully implemented hash table, to demonstrate this process. The code below shows how the counting is completed.
const map1 = new Map();

const arr = [1, 4, 3, 2, 5, 1, 4, 2, 3, 1, 5, 1, 3, 2];

for (var i = 0; i < arr.length; i++) {
  if (map1.has(arr[i])) {
    map1.set(arr[i], map1.get(arr[i]) + 1);
  } else {
    map1.set(arr[i], 1);
  }
}

console.log(map1);
