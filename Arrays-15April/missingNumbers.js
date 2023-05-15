// aim: to find missing number in the array from 0 to 100

const nums = [];

for (let i = 0; i <= 100; i++) {
  if (i != 50) {
    nums.push(i); // inserting all numbers except 50 into the nums array
  }
}

var total = 0;
for (let i = 0; i < nums.length; i++) {
  total += nums[i];
}

console.log("The missing number in nums array from 0 to 100 is: ");
console.log(5050 - total); // sum of 0 to 100 is 5050, so substracting total from 5050 will give the missing number
