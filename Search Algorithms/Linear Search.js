// Problem Statement: Givena an array of 'n' elements, and a target element 't'. Find the index of 't' in the array. Return -1 if the element is not found.
// Big - O: O(n)
const findIndex = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    // search in the full array one by one, and the value of which index is equal to the target value, that index will be returned
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};

console.log(findIndex([-5, 1, 2, 4, 7], 7)); // 4
console.log(findIndex([-5, 1, 2, 4, 7], 10)); // -1
console.log(findIndex([-5, 1, 2, 4, 7], -5)); // 0
console.log(findIndex([-5, 1, 2, 4, 7], 5)); // -1
