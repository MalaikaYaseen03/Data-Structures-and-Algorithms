// Problem Statement: Given an array of integers, sort the array

// Ascending Insertion Sort
// Big - O: O(n^2)
const AscinsertionSort = (arr) => {
  // loop to traverse over sorted array
  for (let i = 1; i < arr.length; i++) {
    // from the value of index "1", the unsorted array starts
    const numbertoinsert = arr[i];
    // the sorted array starts from i-1, means value of index 0
    let j = i - 1;
    // loop to traverse over sorted array
    // the loop will keep repeating until the index reaches to index 0
    // and value of j is greater than the selected number of the sorted array
    while (j >= 0 && arr[j] > numbertoinsert) {
      // if the selected number of unsorted array is less, than the place of selected number will be replaced by the current value of sorted array
      arr[j + 1] = arr[j];
      //   then the j pointer will move 1 index backward to compare
      j = j - 1;
      //  the loop will continue until we found the smallest value from the selected number in the sorted array
    }
    // place the selected number to the right of the smallest value in the sorted array
    arr[j + 1] = numbertoinsert;
  }
};

const arr = [8, 20, -2, 4, -5];
AscinsertionSort(arr);
console.log("Insertion Ascending Sorted array: ", arr);

// Descending Insertion Sort
const DesInsertionsort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const numbertoinsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] < numbertoinsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numbertoinsert;
  }
};
const arr1 = [8, 20, -2, 4, -5];
DesInsertionsort(arr1);
console.log("Insertion Descending Sorted array: ", arr1);
