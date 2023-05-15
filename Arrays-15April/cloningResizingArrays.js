const products = ["flour", "yeast", "eggs"];

const products2 = [...products];
console.log(products2);

const products3 = products.slice();
console.log(products3);

const products4 = [].concat(products);
console.log(products4);

const products5 = Array.from(products);
console.log(products5);

products.length = 1;
console.log(products);
// ----------------------------
//-----------------------------
// ----------------------------
//-----------------------------
arr1 = [2, 1, 3, 4, 5];
val = 1;
count = 0;
var reduceLength = false;

for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] != val) {
    arr1[count++] = arr1[i];
  } else {
    reduceLength = true;
  }
}
if (reduceLength) {
  arr1.length -= 1;
}

console.log(arr1);
