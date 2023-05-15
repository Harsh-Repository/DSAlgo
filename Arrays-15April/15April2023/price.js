//discount --> out of all products, the least expensive is free

let cart = [500, 600, 400, 800, 700];

//assume the first index is the smallest value
let smallest = cart[0];

//---------------
for (let index = 1; index < cart.length; index++) {
  if (smallest > cart[index]) {
    smallest = cart[index];
  } else continue;
}

console.log(smallest);

// display total amount - smallest amount = discounted amount
let totalPrice = 0;
for (let index = 0; index < cart.length; index++) {
  totalPrice += cart[index];
}

console.log("total price: " + totalPrice);
console.log("discounted price: " + (totalPrice - smallest));
