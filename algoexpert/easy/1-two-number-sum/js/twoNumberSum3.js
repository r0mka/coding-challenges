/*
    Write a function that takes in a non-empty array of distinct integers and an
  integer representing a target sum. If any two numbers in the input array sum
  up to the target sum, the function should return them in an array, in any
  order. If no two numbers sum up to the target sum, the function should return
  an empty array.

*/

// O(NlogN) time | O(1) space
function twoNumberSum(array, targetSum) {
  // use two pointers
  // sort the array Nlog(N)
  // [3, 5, -4, 8, 11, 1, -1, 6] -> [-4, -1, 1, 3, 5, 6, 8, 11]

  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    const currentSum = array[left] + array[right];
    if (currentSum === targetSum) return [array[left], array[right]];
    else if (currentSum < targetSum) left++;
    else if (currentSum > targetSum) right--;
  }
  return [];
}
// output [-1, 11] // the numbers could be in reverse order
console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
