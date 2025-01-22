// Problem Statement: Given a natural number 'n', determine if the number is prime or not.
// Big - O: O(n)
const PrimeNumber = (n) => {
  if (n < 2) {
    return false;
  } else {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
};

// console.log(PrimeNumber(1)); // false
// console.log(PrimeNumber(2)); // true
// console.log(PrimeNumber(4)); // false
// console.log(PrimeNumber(5)); // true
// console.log(PrimeNumber(21)); // false
// console.log(PrimeNumber(3)); // true

// Big - O: O(sqrt(n))
const OptimizedPrime = (n) => {
  if (n < 2) {
    return false;
  } else {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
};

console.log(OptimizedPrime(1)); // false
console.log(OptimizedPrime(2)); // true
console.log(OptimizedPrime(4)); // false
console.log(OptimizedPrime(5)); // true
console.log(OptimizedPrime(21)); // false
console.log(OptimizedPrime(3)); // true
