const products = [
  ["flour", "eggs", "yeast"],
  ["soda", "water", "juice"],
];

console.log(products[0][1]);
console.log(products[0]);
console.table(products);

products.push(["soyabean", "peas"]);
console.table(products);
//------------------
//------------------
console.log("---------Transpose of Array/Matrix---------");
var arr1 = [
  [1, 2],
  [3, 4],
];
console.table(arr1);
for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < i; j++) {
    const temp = arr1[i][j];
    arr1[i][j] = arr1[j][i];
    arr1[j][i] = temp;
  }
}
console.table(arr1);
