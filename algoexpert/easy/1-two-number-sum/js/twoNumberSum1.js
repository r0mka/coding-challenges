/*
    Write a function that takes in a non-empty array of distinct integers and an
  integer representing a target sum. If any two numbers in the input array sum
  up to the target sum, the function should return them in an array, in any
  order. If no two numbers sum up to the target sum, the function should return
  an empty array.

*/

// BRUTE FORCE O(N ^ 2) time | O(1) space
function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length - 1; i++) {
    const firstNum = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const secondNum = array[j];
      if (firstNum + secondNum === targetSum)
        return [firstNum, secondNum];
    }
  }
  return [];
}
// output [-1, 11] // the numbers could be in reverse order
console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
