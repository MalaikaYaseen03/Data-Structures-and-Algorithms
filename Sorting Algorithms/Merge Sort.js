// Problem Statement: Given an array of integers, sort the array

const mergeSort = (arr) => {
  //   base case for recursion: if arr lemgth is 1
  // - contains only one element
  if (arr.length < 2) {
    return arr;
  }
  // calculating middle element
  const midElement = Math.floor(arr.length / 2);
  // dividing arr into left and right array till
  // arr.length is 1
  const leftArr = arr.slice(0, midElement);
  const rightArr = arr.slice(midElement);
  // calling the merge function and
  //  recursively diiding the arr into sub arrays
  return merge(mergeSort(leftArr), mergeSort(rightArr));
};

const merge = (leftArr, rightArr) => {
  // inializing the sorted arr
  let sortedArr = [];
  // repeating loop until the left and right subarr contains element
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      // puhing smaller element to the sortedArr
      // and also deleting from the leftArr
      sortedArr.push(leftArr.shift());
    } else {
      // puhing greater element to the sortedArr
      // and also deleting from the rigthArr
      sortedArr.push(rightArr.shift());
    }
  }
  //   exit the loop and merging the sortedArr with
  //  left and right arr if they contain any element
  return [...sortedArr, ...leftArr, ...rightArr];
};

// calling function
const arr = [-6, 20, 8, -2, 4];
console.log(mergeSort(arr));
