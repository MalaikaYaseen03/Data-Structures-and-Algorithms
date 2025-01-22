// Problem Statement: Given a sorted array of 'n' elements, and a target element 't'. Find the index of 't' in the array. Return -1 if the element is not found.

// Big - O: O(logn)
const BinarySearch = (arr, target) => {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[middleIndex]) {
      return middleIndex;
    }
    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
};

console.log(BinarySearch([-5, 2, 4, 6, 10], 10)); // 4
console.log(BinarySearch([-5, 2, 4, 6, 10], 6)); // 3
console.log(BinarySearch([-5, 2, 4, 6, 10], 20)); // -1
