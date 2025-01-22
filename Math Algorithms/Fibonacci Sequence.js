// Problem Statement: Given a number 'n', find the first 'n' elements of the fibonacci sequence
// Big-O : O(n)
const FibonacciSequence = (n) => {
  const fib = [0, 1];
  // we know that fibbonacci of a number is always the sum of previous two numbers
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
};

console.log(FibonacciSequence(2)); // [ 0, 1 ]
console.log(FibonacciSequence(3)); // [ 0, 1, 1 ]
console.log(FibonacciSequence(6)); // [ 0, 1, 1, 2, 3, 5 ]
console.log(FibonacciSequence(8)); // [ 0, 1, 1,  2, 3, 5, 8, 13 ]
