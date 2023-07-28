// https://www.youtube.com/watch?v=NhQuFQrD2mU
// Quick Sort:
// Whole idea of quick sort algo is to use divide and conquer approach and going to use recusrsion.
// Think of pivot in quick sort, any value can be a pivot
// Ex: [3,2,4,1,6,5] >> Divide it into two parts from pivot point and then sort them and then join them.

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  let pivot = arr[arr.length - 1];
  let leftArr = [];
  let rightArr = [];

  for (i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  //divide and conquer
  if (leftArr.length > 0 && rightArr.length > 0) {
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
  } else if (leftArr.length > 0) {
    return [...quickSort(leftArr), pivot];
  } else {
    return [pivot, ...quickSort(rightArr)];
  }
}

console.log(quickSort([3, 2, 4, 1, 6, 5]));
