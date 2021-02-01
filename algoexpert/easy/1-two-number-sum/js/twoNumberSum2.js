/*
    Write a function that takes in a non-empty array of distinct integers and an
  integer representing a target sum. If any two numbers in the input array sum
  up to the target sum, the function should return them in an array, in any
  order. If no two numbers sum up to the target sum, the function should return
  an empty array.

*/

// O(N) time | O(N) space
function twoNumberSum(array, targetSum) {
  const nums = {};
  for (const num of array) {
    const potentialMatch = targetSum - array[i];
    if (potentialMatch in nums) return [potentialMatch, num];
    nums[num] = true;
  }
  return [];
}
// output [-1, 11] // the numbers could be in reverse order
console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
