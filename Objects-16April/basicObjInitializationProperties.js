// First Method of Object Declaration
// The syntax const product = new Object(); declares a product as an object.
// Much like arrays, when working with data structures, the 'const' keyword
// ensures that an object is not redeclared as another object at a later stage.
// 'const' keeps objects one to one, i.e., the object 'product' is always
// associated with a single object instance.
// The dot notation indicates that you get something from this product.

const product = new Object();
product.productName = "Computer";
product.price = 599.99;

console.log(product);

// Second Method of Object Declaration
// The syntax within the brace brackets:
// productName:"Computer" is a key-value pair.
// Key is the product's property name. Value is the actual value, in this case, the computer.
// This syntax maps values to properties.
const otherProduct = {
  productName: "Computer",
  price: 599.99,
};

console.log(otherProduct);
// Second Method of Object Declaration
// The only difference between the two method declarations is that the second method provides more ability to write and manipulate objects.

otherProduct.productName = "Laptop";
console.log(otherProduct.productName);

// You can iterate through each of the properties and get the value associated with it.
// You can think of an object like an array. It's an array where
// instead of indexes like O, 1, 2, 3, etc„ there are property names.
// Instead of using indexes, you are using names that are referred to as keys.
for (property in otherProduct) {
  console.log(property);
  console.log(product[property]);
}
