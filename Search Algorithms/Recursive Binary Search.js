// Problem Statement: Given a sorted array of 'n' elements, and a target element 't'. Find the index of 't' in the array. Return -1 if the element is not found.
// Big - O: O(logn)
const recursiveBinary = (arr, target) => {
  // helper function to calll recursively
  // arr, target value, leftIndex, rightIndex
  return search(arr, target, 0, arr.length - 1);
};

function search(arr, target, leftIndex, rightIndex) {
  // base case: target not found
  if (leftIndex > rightIndex) {
    return -1;
  }
  // calculating middle index
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  // if target value is equal to the middle index value, we will return middle index
  if (target === arr[middleIndex]) {
    return middleIndex;
  }
  // if target value is less than middle index value, we will search in the left half of the array
  // that left half array will be sent to the search function with updated value of rightIndex
  if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex - 1);
  }
  //  if target value is greater than middle index value, we will search in the right half of the array
  // that right half array will be sent to the search function with updated value of leftIndex
  return search(arr, target, middleIndex + 1, rightIndex);
}

console.log(recursiveBinary([-5, 2, 4, 6, 10], 10)); // 4
console.log(recursiveBinary([-5, 2, 4, 6, 10], 6)); // 3
console.log(recursiveBinary([-5, 2, 4, 6, 10], 20)); // -1
