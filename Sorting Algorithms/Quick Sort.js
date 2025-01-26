// Problem Statement: Given an array of integers, sort the array
// Ascending Quick Sort
function AscQuickSort(arr) {
  // Base case: if th array size becomes 1 or less than 1 than it can't be splited into two subarrays
  if (arr.length < 2) {
    return arr;
  }
  //   pick the last element of arr as pivot (the elemnt to which all the elements are compared)
  const pivot = arr[arr.length - 1];
  //   leftarr to which the smaller elemnts will be pushed
  const leftArr = [];
  //   rightarr to which the greater elemnts will be pushed
  const rightArr = [];
  //   loop to traverse the array
  for (let i = 0; i < arr.length - 1; i++) {
    // if the element is smaller than pivot then it is pushed to left array
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      // but if the element is greater than pivot then it is pushed to right array
      rightArr.push(arr[i]);
    }
  }
  //   call the function recursively to perform the same operations on subarrays
  //   for ASCENDING ORDER
  return [...AscQuickSort(leftArr), pivot, ...AscQuickSort(rightArr)];
  //   for DESCENDING ORDER
  //   return [...AscQuickSort(rightArr), pivot, ...AscQuickSort(leftArr)];
}

console.log(AscQuickSort([-6, 20, 8, -2, 4]));
