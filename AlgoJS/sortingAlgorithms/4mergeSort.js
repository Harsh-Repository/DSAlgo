// Merge Sort: Split arrays & sort them & merge them back
// Whole idea of merge sort algo is to use divide and conquer and going to use recusrsion.
// Ex: [3,2,4,1,6,5] >> Divide it into two parts and then sort them and then join them.
// Ex: [3,2,4,1,6,5] >> [3,2,4]|[1,6,5] >> [3]|[2,4]|[1]|[6,5] >> [3]|[2]|[4]|[1]|[6]|[5] >> sort now >> [2,3,4]|[1,5,6] >> merge now >> [1,2,3,4,5,6]

function mergeSortArray(nums) {
  if (nums.length <= 1) return nums;

  const middle = Math.floor(nums.length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle);

  return merge(mergeSortArray(left), mergeSortArray(right));
}

function merge(left, right) {
  const result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return [...result, ...left, ...right];
}

console.log(mergeSortArray([3, 2, 4, 1, 6, 5]));
