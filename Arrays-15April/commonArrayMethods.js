const products = ["flour", "yeast", "eggs"];
console.log(products.toString());
console.log(products.join("|"));

let product = products.pop(); // pop removes last element in array
console.log(product);
console.log(products);

delete products[0]; // this will create an empty slot, which is not right
console.log(products);

//--------------------
//--------------------
const arr1 = [1, 2, 3, 4, 5];
var evenCount = 0;
var oddCount = 0;

for (vals of arr1) {
  if (vals % 2 === 0) {
    evenCount += 1;
  } else {
    oddCount += 1;
  }
}

console.log(evenCount);
console.log(oddCount);
