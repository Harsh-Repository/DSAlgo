const products = ["flour", "yeast", "eggs"];
const nums = [1, 2, 3, 4];

products.forEach(printProducts);
function printProducts(value, index, array) {
  console.log(value);
}

const newNums = nums.map(addOne);
console.log(newNums);
function addOne(value, index, array) {
  return value + 1;
}

const filteredNums = nums.filter(lessThree);
console.log(filteredNums);
function lessThree(value, index, array) {
  return value < 3;
}

let sumNums = nums.reduce(sumAll);
console.log(sumNums);
function sumAll(total, value, index, array) {
  return total + value;
}
