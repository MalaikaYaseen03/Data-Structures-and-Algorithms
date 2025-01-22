// Problem Statement: Given a sorted array of 'n' elements, and a target element 't'. Find the index of 't' in the array. Return -1 if the element is not found.

// Big - O: O(logn)
const BinarySearch = (arr, target) => {
  // asigning values to left pointer and right pointer
  let leftIndex = 0;
  let rightIndex = arr.length - 1; // last index of array

  // loop will keep repeating until left indexn and right index are same or right index is greater then left index
  while (leftIndex <= rightIndex) {
    // calculating middle index
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    // if target value is equal to the middle index value, we will return middle index
    if (target === arr[middleIndex]) {
      return middleIndex;
    }
    // if target value is less than middle index value, we will search in the left half of the array
    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      //  if target value is greater than middle index value, we will search in the right half of the array
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
};

console.log(BinarySearch([-5, 2, 4, 6, 10], 10)); // 4
console.log(BinarySearch([-5, 2, 4, 6, 10], 6)); // 3
console.log(BinarySearch([-5, 2, 4, 6, 10], 20)); // -1
