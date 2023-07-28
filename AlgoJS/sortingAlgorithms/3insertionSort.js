//Insertion Sort: Here the time complexity is not the greatest but is definitely a good algo to remeber
// Sort in ascending order using insertion sort
// How Insertion sort works?
// Ex: [3,2,4,1,6,5]
// We will start at index of 1 and the reason is because with insertion sort what you do is compare this value to everything behind it.
// So whatever is behind it you compare it and then you insert it into the correct position.
// 2 is compared with 3, since 2 is less than 3 we flip those and 2 goes to index0 and 3 comes to index1
// next 4 is compared with all previous values, 4<3 no, then 4<2 no, then move along because that is correct position.
// next we move to index3 which has value 1 and we now compare one to 4,3 & 2. One is smaller than all so, it'll be inserted at the beginning.
// next we move on to index 4 and so on.
// [3,2,4,1,6,5] >> [2,3,4,1,6,5] >> [2,3,4,1,6,5] >> [1,2,3,4,6,5] >> [1,2,3,4,6,5] >> [1,2,3,4,5,6]

function insertionSort(nums) {
  for (i = 1; i < nums.length; i++) {
    for (j = i; j >= 0; j--) {
      if (nums[j] < nums[j - 1]) {
        [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]];
      }
    }
  }
  return nums;
}

console.log(insertionSort([3, 2, 4, 1, 6, 5]));

//Time complexity: Big O(n^2)
//Space complexity: Big O(1)
