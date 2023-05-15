const nums = [4, 10, 12, 3, 15, 216, 2, 77];
var maxValue = nums[0];
var minValue = nums[0];

for (let i = 0; i < nums.length; i++) {
  if (maxValue < nums[i]) {
    maxValue = nums[i];
  }
}

console.log(maxValue + " is the max value in the nums array");

for (let i = 0; i < nums.length; i++) {
  if (minValue > nums[i]) {
    minValue = nums[i];
  }
}

console.log(minValue + " is the min value in the nums array");
