// Problem Statement: Given an integer 'n', find the factorial of that integer.
// Big - O: 0(n)
const RecursiveFactorial = (n) => {
  if (n === 0) {
    return 1;
  }
  return n * RecursiveFactorial(n - 1);
};

console.log(RecursiveFactorial(0)); // 1
console.log(RecursiveFactorial(1)); // 1
console.log(RecursiveFactorial(4)); // 24
console.log(RecursiveFactorial(6)); // 720
