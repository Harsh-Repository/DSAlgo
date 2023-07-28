// Selection sort: (Select and sort >> selects the element and then sorts it)
// Sort in ascending order using selection sort
// How Selection sort works?
// It loops through the array, finds the minimum value. I choose first value and then compares it to each value in the array and then reassigns the values.
// [2,4,3,6,5,1] >> [1,4,3,6,5,2] >> [1,2,3,6,5,4] >> [1,2,3,6,5,4] >> [1,2,3,4,5,6] >> [1,2,3,4,5,6]

function selectionSort(nums) {
  for (i = 0; i < nums.length - 1; i++) {
    let minIndex = i;
    for (j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
      [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
    }
  }
  return nums;
}

console.log(selectionSort([2, 4, 3, 6, 5, 1]));
