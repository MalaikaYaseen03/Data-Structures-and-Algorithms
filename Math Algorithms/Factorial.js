// Problem Statement: Given an integer 'n', find the factorial of that integer.
// Self solution
// Big - O : O(n)
const Factorial = (n) => {
  let fac = 1;
  if (n < 0) {
    return "Number should be positive";
  } else {
    // factorial of 0 and 1 is always 1
    if (n === 0 || n === 1) {
      return 1;
    } else {
      // loop for calculating factorial
      for (let i = 1; i <= n; i++) {
        fac = fac * i;
      }
    }
  }
  return fac;
};

console.log(Factorial(3)); // 6
console.log(Factorial(8)); // 40320
console.log(Factorial(4)); // 24
console.log(Factorial(-4)); // Number should be positive
console.log(Factorial(0)); // 1

// Video Solution
// Big - O : O(n)

const factorial = (n) => {
  let result = 1;
  // loop for calculating factorial
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
};

console.log(factorial(3)); // 6
console.log(factorial(8)); // 40320
console.log(factorial(4)); // 24
console.log(factorial(-4)); // 1
console.log(factorial(-0)); // 1
