// Problem Statement: Given a positive integer 'n', if the number is the power of 2 or not.
// Big - O: O(logn)
const IsPowerofTwo = (n) => {
  // if number is less than 1, we will return false as for number less than do not have any power of 2
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
};

console.log(IsPowerofTwo(1)); // true
console.log(IsPowerofTwo(2)); // true
console.log(IsPowerofTwo(4)); // true
console.log(IsPowerofTwo(5)); // false
// console.log(IsPowerofTwo(21)); // false
// console.log(IsPowerofTwo(3)); // false
// console.log(IsPowerofTwo(8)); // true

// Big - O : O(1)
const IsPowerofTwoBitwise = (n) => {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
};

console.log(IsPowerofTwoBitwise(3)); // false
console.log(IsPowerofTwoBitwise(8)); // true
console.log(IsPowerofTwoBitwise(4)); // true
console.log(IsPowerofTwoBitwise(5)); // false
