// Problem Statement: Given an array of integers, sort the array
// Big - O: O (n^2)
// Bubble sort for ascending order sort
const BubbleSort = (arr) => {
  // Boolean to keep track that swapping occurs or not
  let swapped;
  //   do-while loop to set the condition, that for loop keeps iterating until swapped is true
  do {
    // initially the swapped is false
    swapped = false;
    // set the i less than array length because we are not going to compare the value outside of the array
    for (let i = 0; i < arr.length - 1; i++) {
      // comapre if a value is greater than the next value
      if (arr[i] > arr[i + 1]) {
        // swapping
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        // swapped set to true
        swapped = true;
      }
    }
  } while (swapped);
};

const arr = [10, 8, 20, 0, -2, 4, -6, 1];
BubbleSort(arr);
console.log(arr);
