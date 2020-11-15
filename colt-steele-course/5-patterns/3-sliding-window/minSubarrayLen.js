// Sliding Window - minSubArrayLen
// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
// Examples:

// Time Complexity - O(n)

// Space Complexity - O(1)

function minSubArrayLen(arr, num) {
  // keep track of left index and right index
  let left = 0;
  let right = 1;
  // set tempSum to zero
  let tempSum = arr[0];
  let tempLength = 1;
  let minLength = Infinity;
  // loop over the array
  while (left < arr.length && right < arr.length) {
    // add current element to tempSum
    // increment tempLength
    // check if tempSum = num
    tempSum += arr[right];
    tempLength++;

    if (tempSum === num) {
      if (tempLength < minLength) {
        minLength = tempLength;
      }
      left++;
      right++;
      tempSum -= arr[left];
    } else if (tempSum > num) {
      // else if tempSum > num
      if (tempLength < minLength) {
        minLength = tempLength;
      }
      tempSum = tempSum - arr[left] - arr[right];
      left++;
      tempLength--;
    } else {
      right++;
    }
    // else increment right
  }
  return minLength === Infinity ? 0 : minLength;
  // [1, 1, 2, 1, 2, 1, 4, 3] , 7;
  // [2, 3, 2, 5, 3, 4], 7
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
console.log(
  minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)
); // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
