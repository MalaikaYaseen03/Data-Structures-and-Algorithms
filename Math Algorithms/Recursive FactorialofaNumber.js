// Problem Statement: Given an integer 'n', find the factorial of that integer.
// Big - O: 0(n)
const RecursiveFactorial = (n) => {
  // base case: factorial of 0 is 1
  if (n === 0) {
    return 1;
  }
  // factorial of a number is the product of all previous numbers and so on.
  return n * RecursiveFactorial(n - 1);
};

console.log(RecursiveFactorial(0)); // 1
console.log(RecursiveFactorial(1)); // 1
console.log(RecursiveFactorial(4)); // 24
console.log(RecursiveFactorial(6)); // 720
