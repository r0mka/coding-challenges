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
console.log('\nPOWER ===========================');
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
console.log('\nFACTORIAL ===========================');
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(4)); // 24
console.log(factorial(7)); // 5040

// Write a function called productOfArray which takes in an array
// of numbers and returns the product of them all
function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

console.log('\nPRODUCT OF ARRAY ===========================');
console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60

// Write a function called recursiveRange which accepts a number
// and adds up all the numbers from 0 to the number passed to
// the function
function recursiveRange(num) {
  if (num === 1) return 1;
  return num + recursiveRange(num - 1);
}

// SAMPLE INPUT/OUTPUT
console.log('\nRECURSIVE RANGE ===========================');
console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55
