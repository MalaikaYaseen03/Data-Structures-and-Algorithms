// Problem Statement: Given a sorted array of 'n' elements, and a target element 't'. Find the index of 't' in the array. Return -1 if the element is not found.
// Big - O: O(logn)
const recursiveBinary = (arr, target) => {
  return search(arr, target, 0, arr.length - 1);
};

function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (target === arr[middleIndex]) {
    return middleIndex;
  }
  if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex - 1);
  }
  return search(arr, target, middleIndex + 1, rightIndex);
}

console.log(recursiveBinary([-5, 2, 4, 6, 10], 10)); // 4
console.log(recursiveBinary([-5, 2, 4, 6, 10], 6)); // 3
console.log(recursiveBinary([-5, 2, 4, 6, 10], 20)); // -1
