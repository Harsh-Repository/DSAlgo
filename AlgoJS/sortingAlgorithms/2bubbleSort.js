// Bubble Sort: Not an effiecient sorting algorithm
// Sort in ascending order using selection sort
// How Bubble sort works?
// It compares two values in the array at a time
// Ex: [3,2,4,1,6,5] >> It compares 3 & 2 and whichever is largest it pushes to the back and have the smallest to the front. So ordering them essentially and then it'll compare the next two and so on so forth until it reaches the end of the array now.
// If the actual array is still not ordered then what it'll do is it will go over the array again & again.
// First iteration: [3,2,4,1,6,5] >> [2,3,4,1,6,5] >> [2,3,1,4,6,5] >> [2,3,1,4,6,5] >> [2,3,1,4,5,6]
// Second iteration: [2,1,3,4,5,6]
// Third iteration: [1,2,3,4,5,6] // now it is sorted
// Time Complexity: O(n^2) //worst case scenario [6,5,4,3,2,1] will take longer time
// Space Complexity: O(1)

//Note: Bubble sort algorithm : think of it as two values being compared and then bubbling up or propagating to the end of the array.

function bubbleSort(nums) {
  for (i = 0; i < nums.length - 1; i++) {
    for (j = 0; j < nums.length; j++) {
      //setting j < nums.length - i inside this for loop will make this run slightly bit faster becasue we know after each iteration of the array that the last value is going to be sorted, so can decrement at the end of this to make tiny bit faster
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
  return nums;
}

console.log(bubbleSort([3, 2, 4, 1, 6, 5]));
