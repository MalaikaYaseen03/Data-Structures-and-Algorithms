// Problem Statement: Given a number 'n', find the nth element of the fibonacci sequence.
// Big - O: 0(2^n)
const RecursiveFibonacci = (n) => {
  // base case: fibbonacci of 0 is 0 and 1 is 1
  if (n < 2) {
    return n;
  }
  // Fibonacci of a number is the sum of previous two numbers and so on.
  return RecursiveFibonacci(n - 1) + RecursiveFibonacci(n - 2);
};

console.log(RecursiveFibonacci(0)); // 0
console.log(RecursiveFibonacci(1)); // 1
console.log(RecursiveFibonacci(6)); // 8
console.log(RecursiveFibonacci(8)); // 21
console.log(RecursiveFibonacci(2)); // 1
console.log(RecursiveFibonacci(12)); // 144
