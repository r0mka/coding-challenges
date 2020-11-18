/**
 * Write a function called power which accepts a base and an exponent. The function
 * should return the power of the base to the exponent. This function should mimic
 * the functionality of Math.pow() Do not worry about negative bases and exponents
 */

function power(base, exp) {
  if (exp === 0) return 1;
  if (exp === 1) return base;
  return base * power(base, --exp);
}

console.log(power(2, 3)); // 8
console.log(power(4, 2)); // 16
console.log(power(5, 1)); // 5
console.log(power(2, 0)); // 1
console.log(power(2, 2)); // 4
console.log(power(2, 4)); // 16

// Write a function factorial which accepts a number and returns the factorial of that number.
// A factorial is the product of an integer and all the integers below it; e.g.,
// factorial four (4!) is equal to 24, because 4 * 3 * 2 * 1 equals 24.
// Factorial zero (0!) is always 1.
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
console.log('\n\nFACTORIAL ===========================');
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(4)); // 24
console.log(factorial(7)); // 5040
