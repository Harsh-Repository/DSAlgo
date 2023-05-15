//reversing array

let values = [500, 600, 400, 800, 700];
// function reverse(array) {
//   var output = [];
//   for (var i = array.length - 1; i > -1; i--) {
//     output.push(array[i]);
//   }

//   return output;
// }

// console.log(reverse([500, 600, 400, 800, 700]));
let newArray = [];
for (let index = 0; index < values.length; index++) {
  newArray.push(values[index]);
}

console.log(newArray);
